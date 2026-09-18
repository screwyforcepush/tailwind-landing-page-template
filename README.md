# dataadvisor.io

Personal site for Alex Savage, live at [https://www.dataadvisor.io/](https://www.dataadvisor.io/).

Single-page Next.js (App Router) site styled with Tailwind CSS. Deployed on Vercel from `main`.

## Develop

```bash
npm install
npm run dev      # http://localhost:3051
npm run build    # production build check
```

## Layout

- `app/layout.tsx` — root shell: fonts, header, particle background, analytics
- `app/(default)/page.tsx` — the one page: hero, feature blocks, testimonials, terminal footer
- `components/` — page sections and UI (`ui/`) plus effect helpers (`utils/`)
- `app/css/` — Tailwind entry and the additional cyberpunk/glitch styles
- `public/` — logo, headshot, client logos, and the Three.js hero animation script

Originally bootstrapped from the Cruip "Simple Light" Tailwind template (GPL); little of the template remains.
