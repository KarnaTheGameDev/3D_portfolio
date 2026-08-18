# Suman Raj Shetty — Portfolio

An interactive 3D developer portfolio built with React, Vite and
react-three-fiber. Drag the island on the home page to move through the
sections.

**Live:** _(set once the Vercel deployment is live)_

## Stack

| | |
|---|---|
| Framework | React 18 + Vite |
| 3D | three.js, @react-three/fiber, @react-three/drei, @react-spring/three |
| Routing | react-router-dom (client-side) |
| Styling | Tailwind CSS |
| Contact form | EmailJS |

## Running locally

```bash
npm install
cp .env.example .env   # then fill in your EmailJS values
npm run dev
```

Other scripts: `npm run build`, `npm run preview`, `npm run lint`.

## Configuration

The contact form needs three EmailJS values. Copy `.env.example` to `.env` for
local development, and set the same keys in Vercel under **Project Settings →
Environment Variables** for deploys:

- `VITE_APP_EMAILJS_SERVICE_ID`
- `VITE_APP_EMAILJS_TEMPLATE_ID`
- `VITE_APP_EMAILJS_PUBLIC_KEY`

`.env` is gitignored. Vite inlines anything prefixed `VITE_` into the client
bundle, so these are visible to anyone who views source — keep the EmailJS
domain allowlist enabled so the quota can't be used from other origins.

## Deployment

Deployed on Vercel from this repository. `vercel.json` rewrites all unmatched
paths to `/`, which is what lets `/about`, `/projects` and `/contact` load on a
direct visit or a refresh — a client-routed SPA 404s on those without it.

## Content

Site copy lives in [`src/constants/index.js`](src/constants/index.js) — skills,
work experience and projects are all plain data, so updating the site is
usually a matter of editing that one file.

## Credits

The 3D scene structure and layout began as
[JavaScript Mastery's 3D portfolio](https://github.com/adrianhajdin/project_3D_developer_portfolio)
tutorial, since substantially rewritten.
