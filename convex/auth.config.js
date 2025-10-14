const applicationID =
  process.env.CLERK_JWT_TEMPLATE_NAME?.trim() || "convex";
const domain = process.env.CLERK_JWT_ISSUER_DOMAIN;

export default {
  providers: [
    {
      // Convex verifies incoming Clerk-issued JWTs against this domain.
      domain,
      applicationID,
    },
  ],
};
