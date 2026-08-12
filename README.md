# Peacemaker Safety Training — website

Next.js (App Router) + TypeScript + Tailwind CSS rebuild of peacemakersafetytraining.com,
built to deploy on Vercel.

## Pages

- `/` — Home
- `/about` — About
- `/training` — Training offerings
- `/safety-check` — 15-question church safety readiness quiz with scoring

## Local development

```bash
npm install
cp .env.local.example .env.local   # fill in real values, see below
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Without real values in `.env.local`, both forms still work end-to-end in the browser —
the API routes just log a warning and skip the email/sheet step, so you can develop the
UI without live credentials.

## Forms

Both the contact form (Home/About/Training) and the Safety Check quiz post to their own
API route (`/api/contact`, `/api/safety-check`), which both call the single
`src/lib/submitLead.ts` helper. That helper:

1. Emails a notification via **Resend**.
2. Appends a row to a **Google Sheet**.

Swapping in a real database later (e.g. for event RSVPs) means adding a branch inside
`submitLead.ts`, not touching the forms or routes themselves.

### One-time setup the site owner needs to do

**Resend (email notifications)**
1. Create an account at [resend.com](https://resend.com).
2. Verify a sending domain (recommended) or use the sandbox `onboarding@resend.dev`
   sender while testing.
3. Create an API key.

**Google Sheets (spreadsheet copy of submissions)**
1. In [Google Cloud Console](https://console.cloud.google.com), create/reuse a project
   and enable the **Google Sheets API**.
2. Create a **Service Account**, then generate a JSON key for it.
3. Create a Google Sheet with two tabs named exactly `Contact` and `Safety Check`.
4. Share that Sheet with the service account's email address (Editor access).

Fill the resulting values into `.env.local` for local dev — see
`.env.local.example` for the full list and where each value comes from.

## Deploying to Vercel

1. Push this repo to GitHub.
2. In the Vercel dashboard, "Add New Project" → import the GitHub repo. Vercel
   auto-detects Next.js, no config needed.
3. Add the same environment variables from `.env.local` in the Vercel project's
   Settings → Environment Variables (Production + Preview).
4. Deploy. Once it's live on the `*.vercel.app` URL, connect the
   `peacemakersafetytraining.com` domain under Settings → Domains, then update DNS at
   your registrar per Vercel's instructions.

## Project structure

- `src/app/*` — pages and API routes
- `src/components/*` — `Header`, `Footer`, `ContactForm`, `SafetyCheckForm`
- `src/lib/trainingOfferings.ts` — training offering content (edit here to add/change a course)
- `src/lib/safetyCheckQuestions.ts` — the 15 quiz questions, scoring weights, and result tiers
- `src/lib/submitLead.ts` — shared form-submission handler (email + sheet)
