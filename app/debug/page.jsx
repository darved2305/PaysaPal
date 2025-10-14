"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";

export default function DebugPage() {
  const { getToken } = useAuth();
  const [mounted, setMounted] = useState(false);
  const [payload, setPayload] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    (async () => {
      try {
        const template = process.env.CLERK_JWT_TEMPLATE_NAME || "convex";
        const token = await getToken?.({ template });
        if (!token) {
          setError(`No token returned for template ${template}`);
          return;
        }
        const b = token.split('.')[1].replace(/-/g,'+').replace(/_/g,'/');
        const padded = b + '='.repeat((4 - b.length % 4) % 4);
        const decoded = JSON.parse(atob(padded));
        setPayload(decoded);
      } catch (e) {
        setError(e?.message || String(e));
      }
    })();
  }, [getToken, mounted]);

  if (!mounted) return null; // prevent server/client HTML mismatch

  return (
    <div style={{ padding: 24 }}>
      <h1>Debug</h1>
      <p>Convex URL: <strong>{process.env.NEXT_PUBLIC_CONVEX_URL}</strong></p>
      <p>Clerk issuer (env): <strong>{process.env.CLERK_JWT_ISSUER_DOMAIN}</strong></p>
      <p>Clerk template (env): <strong>{process.env.CLERK_JWT_TEMPLATE_NAME}</strong></p>
      <p>Publishable key (env): <strong>{process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY?.slice(0,20)}...</strong></p>

      {error ? (
        <div style={{ marginTop: 16, color: 'crimson' }}>
          <h3>Error</h3>
          <pre>{String(error)}</pre>
        </div>
      ) : payload ? (
        <div style={{ marginTop: 16 }}>
          <h3>Token payload</h3>
          <pre>{JSON.stringify(payload, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading token...</p>
      )}
    </div>
  );
}
