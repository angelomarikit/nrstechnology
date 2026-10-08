# NRS Technologies Website

Production-ready multi-page corporate website for **NRS Technologies and Business Solutions Corporation**.

**Tagline:** Powering Your Next Move

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- React Router
- Motion for React
- Lucide React
- Radix UI primitives

## Getting started

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal (typically `http://localhost:5173`).

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Typecheck and production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript project references check |

## Project structure

- `src/data/` — company info, services, FAQ, navigation
- `src/components/` — layout, UI, contact form, FAQ widget
- `src/pages/` — route pages
- `public/logo/` — brand logo
- `public/images/` — photography assets
- `vercel.json` — SPA rewrites for Vercel

## Updating content

- **Company details:** edit `src/data/company.ts`
- **Services:** edit `src/data/services.ts`
- **FAQ answers:** edit `src/data/faq.ts`
- **Navigation labels:** edit `src/data/navigation.ts`
- **Images:** replace files under `public/images/` (see `public/images/ASSETS.md`)

## Contact form

The contact form validates input and opens a pre-filled `mailto:` draft to `info@nrstechsolutions.com`. Visitors must send the email from their mail client.

To connect a real delivery provider later (Formspree, Resend, etc.), keep the same form UI and replace the submit handler in `src/components/contact/ContactForm.tsx`. Do not put private API keys in frontend code.

## FAQ widget

The floating widget is a rule-based FAQ assistant (not live chat or AI). Matching logic lives in `src/data/faq.ts`.

## Deploy to Vercel

1. Push the repository to GitHub (or import the folder in Vercel).
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`
5. `vercel.json` already includes SPA rewrites so direct routes and refreshes work.

Production domain configured in metadata: `https://nrstechph.com`

## Notes

- No backend, CMS, auth, or database is required.
- Do not invent client logos, testimonials, statistics, awards, or certifications in content updates.
