# dataadvisor.io

Personal site for Alex Savage, live at [https://www.dataadvisor.io/](https://www.dataadvisor.io/).

Single-page Next.js (App Router) site styled with Tailwind CSS. Deployed on Vercel from `main`.

## Develop

```bash
npm install
npm run dev      # http://localhost:3051
npm run build    # production build check
```

## Blog

Posts are markdown files in `content/posts/`. The filename is the URL slug (`hello-world.md` → `/blog/hello-world`). Each file starts with frontmatter:

```md
---
title: Post title
date: 2026-09-18
description: One-line summary shown on the index page.
---
```

Push to `main` and the site rebuilds. Each post page has a **Copy Markdown** button that copies the raw file, frontmatter included.

## Layout

- `app/layout.tsx` — root shell: fonts, header, particle background, analytics
- `app/(default)/page.tsx` — the home page: hero, feature blocks, testimonials, terminal footer
- `app/(default)/blog/` — post index and `[slug]` post pages, rendered from `lib/posts.ts`
- `components/` — page sections and UI (`ui/`) plus effect helpers (`utils/`)
- `app/css/` — Tailwind entry and the additional cyberpunk/glitch styles
- `public/` — logo, headshot, client logos, and the Three.js hero animation script

Originally bootstrapped from the Cruip "Simple Light" Tailwind template (GPL); little of the template remains.
