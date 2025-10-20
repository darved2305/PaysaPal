# PaySaPal

PaySaPal is a Next.js + Convex + Clerk demo application for tracking and splitting shared expenses. It supports individual and group expenses, multiple split types (equal / exact / percentage), dashboards, settlements, email notifications, and background insights.

## Key features
- Create expenses with multiple split types
- Group and person management
- Dashboard with balances and monthly summaries
- Settlement creation and payment logging
- Background jobs: monthly spending insights and daily payment reminders
- Seed helper to populate demo data

## Tech stack
- Next.js (App Router)
- Convex (server functions and document store)
- Clerk (authentication)
- Inngest (background jobs)
- Resend (email delivery)
- Google Generative API (spending insights)

## Requirements
- Node.js v18+
- npm (or yarn / pnpm)
- Convex CLI
- Clerk account (publishable + secret keys)
- (Optional) Resend API key for email
- (Optional) Google Generative API key for insights

## Environment variables
Create a `.env.local` in the project root with the following keys (do not commit secrets):

NEXT_PUBLIC_CONVEX_URL=
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
CLERK_JWT_ISSUER_DOMAIN=
CLERK_JWT_TEMPLATE_NAME=
RESEND_API_KEY=         # optional (email)
GEMINI_API_KEY=         # optional (spending insights)

Example `.env.example` snippet:
```env
NEXT_PUBLIC_CONVEX_URL=http://127.0.0.1:3210
CONVEX_DEPLOYMENT=anonymous:project
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
CLERK_JWT_ISSUER_DOMAIN=https://your-clerk-domain
CLERK_JWT_TEMPLATE_NAME=convex
RESEND_API_KEY=rsnd_xxx
GEMINI_API_KEY=gemini_xxx
```

## Quick setup (local development)
1. Install dependencies
```bash
npm install
```

2. Start Convex local development
```bash
npx convex dev
```
Ensure `NEXT_PUBLIC_CONVEX_URL` matches the URL printed by the Convex CLI.

3. (Optional) Seed demo data
```bash
npx convex run seed:seedDatabase
```

4. Start Next.js
```bash
npm run dev
```

5. Open the app
Visit: http://localhost:3000

## Background jobs (Inngest)
- Registered in `app/api/inngest/route.js`.
- `spendingInsights` — monthly spending summaries (requires GEMINI_API_KEY).
- `paymentReminders` — daily debt reminders (requires RESEND_API_KEY).

Configure Inngest and deploy the Inngest functions for production scheduling.

## Build & deploy
1. Build
```bash
npm run build
```
2. Deploy Next.js to a host of your choice (Vercel, Netlify, etc.).
3. Deploy Convex functions using Convex deployment workflow and set environment variables in the host/Convex console.

## Troubleshooting
- Convex client errors: check `NEXT_PUBLIC_CONVEX_URL`.
- Auth errors: confirm Clerk keys and issuer domain.
- Email failures: verify `RESEND_API_KEY`.
- Regenerate Convex API files after function changes by running `npx convex dev`.

## Files of interest
- Frontend: `app/`, `components/`
- Convex server: `convex/` (`expenses.js`, `settlements.js`, `email.js`, `seed.js`)
- Inngest: `lib/inngest/` and `app/api/inngest/route.js`
- Auth: `app/layout.js`, `.env.local`


## Quick setup (local development)
1. Install dependencies
```bash
npm install
```

2. Start Convex local development
```bash
npx convex dev
```
Ensure `NEXT_PUBLIC_CONVEX_URL` matches the URL printed by the Convex CLI.

3. (Optional) Seed demo data
```bash
npx convex run seed:seedDatabase
```

4. Start Next.js
```bash
npm run dev
```

5. Open the app
Visit: http://localhost:3000

## Background jobs (Inngest)
- Registered in `app/api/inngest/route.js`.
- `spendingInsights` — monthly spending summaries (requires GEMINI_API_KEY).
- `paymentReminders` — daily debt reminders (requires RESEND_API_KEY).

Configure Inngest and deploy the Inngest functions for production scheduling.

## Build & deploy
1. Build
```bash
npm run build
```
2. Deploy Next.js to a host of your choice (Vercel, Netlify, etc.).
3. Deploy Convex functions using Convex deployment workflow and set environment variables in the host/Convex console.

## Troubleshooting
- Convex client errors: check `NEXT_PUBLIC_CONVEX_URL`.
- Auth errors: confirm Clerk keys and issuer domain.
- Email failures: verify `RESEND_API_KEY`.
- Regenerate Convex API files after function changes by running `npx convex dev`.

## Files of interest
- Frontend: `app/`, `components/`
- Convex server: `convex/` (`expenses.js`, `settlements.js`, `email.js`, `seed.js`)
- Inngest: `lib/inngest/` and `app/api/inngest/route.js`
- Auth: `app/layout.js`, `.env.local`
