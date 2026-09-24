# ThoughtReadersClub

A private literary society landing page built with Next.js 16, TypeScript, Tailwind CSS 4, and shadcn/ui.

## Pages

- `/` — Landing page (hero, philosophy, residency, membership, committee, voices, FAQ, journal, contact CTA)
- `/books` — Books we have read and reviewed (9 real literary books with cover images and reviews by Dr. Tomiwa Johnson)
- `/apply` — Application form (submissions sent via mailto to drtomiwathoughtreadersclub@gmail.com)

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Cloudflare Pages

This project is preconfigured for Cloudflare Pages.

### Option A — Connect to GitHub (recommended, automatic deploys)

1. Push this repo to GitHub.
2. Log in to Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Select this repository.
4. Use these build settings:
   - **Framework preset:** Next.js
   - **Build command:** `npx @cloudflare/next-on-pages@1`
   - **Build output directory:** `.vercel/output/static`
   - **Environment variables:** `NODE_VERSION = 20`
5. Click **Save and Deploy**.
6. Every push to `main` triggers an automatic rebuild and deploy.

### Option B — Deploy from CLI (manual)

```bash
npm install
npx @cloudflare/next-on-pages@1
npx wrangler pages deploy .vercel/output/static --project-name thoughtreadersclub
```

## Tech notes

- `images.unoptimized = true` is set in `next.config.ts` because Cloudflare Pages does not ship the `sharp` native binaries.
- The contact form uses a `mailto:` link, so there is no backend required.
- The footer newsletter form is a no-op stub (no backend).
- Prisma is installed but not used by the public site, so no database is needed for deployment.

## Brand

- Founder: Dr. Tomiwa Johnson
- Brand colors: deep emerald `#1A2F26`, antique gold `#B8924A`, warm cream `#F7F2E8`
- Typography: Playfair Display (headings) + Inter (body)
