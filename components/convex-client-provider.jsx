"use client";

import { ConvexReactClient } from "convex/react";

import { useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;

if (!convexUrl) {
  // Runtime helpful error: this will surface in the browser console if the env var wasn't injected.
  // Common cause: missing .env.local or Next dev server needs a restart after changing env vars.
  // Keep this lightweight so it doesn't break SSR — this file is a client component.
  // eslint-disable-next-line no-console
  console.error(
    "Missing NEXT_PUBLIC_CONVEX_URL. Set NEXT_PUBLIC_CONVEX_URL in .env.local and restart the Next dev server."
  );
}

const convex = new ConvexReactClient(convexUrl);

export function ConvexClientProvider({ children }) {
  return (
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      {children}
    </ConvexProviderWithClerk>
  );
}
