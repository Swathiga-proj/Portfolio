# Swathiga — portfolio

A responsive portfolio built with Next.js App Router, TypeScript, and CSS. Based on the public content at https://swathiga4.wixsite.com/portfolio.

## Local development

Use Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open the address printed by Next.js (normally http://127.0.0.1:3000).

## Validate and build

```bash
npm run typecheck
npm run build
```

The site is statically exported to `out/`. Deploy that folder with a static hosting provider. On Coolify, use a static-site build with `npm run build`, publish directory `/out`, and your repository root as the base directory. No database, Redis, or Celery workers are needed for this portfolio.

## Content and pages

- `lib/content.ts`: profile, résumé, social links, project descriptions, and App Store links.
- `app/page.tsx`: homepage.
- `app/projects/page.tsx`: seven iOS projects and GenieMX.
- `app/contract/page.tsx`: Asian Paints Shopstar contract work.
- `app/contact/page.tsx`: LinkedIn, résumé, and existing contact form links.
- `app/globals.css`: responsive visual styles.

The existing Wix contact form remains the message destination because no email address or form service was supplied. This project does not pretend to send messages. Change that link or integrate a real contact service before retiring the Wix site.

The hero phone is a decorative illustration, not an actual project screenshot. Project images come from the existing Wix portfolio. The homepage retains the source site's current “5+ years” experience claim. Care Station has no App Store button because the source describes it as unlisted and its original link points to a different product.

Project screenshots are bundled in `public/images/`. Remote dependencies: Google Fonts, the Wix-hosted résumé and contact form, LinkedIn, App Store, GitHub, and GenieMX. Move the résumé into `public/` and connect a new contact destination before retiring Wix.

Additional routes: `/blogs/` and two draft articles adapted from your supplied writing; `/hackathons/` features LuluPay (April 2025). Edit `lib/posts.ts` and `lib/hackathons.ts` to update these sections.
# Portfolio
