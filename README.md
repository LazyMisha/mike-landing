# Mike's Landing Page

Minimalist personal portfolio for Mike Trunov — front-end engineer.

## Overview

Single-page CV landing with dark/light theme support. Designed to be shared with recruiters, HRs, and engineers.

## Tech

- **Framework:** Next.js 16
- **Styling:** Tailwind CSS 4
- **Theme:** next-themes (dark/light)
- **Fonts:** System monospace (no external dependencies)

## Structure

```
mike-landing/
├── src/
│   ├── app/                # Next.js app router
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Landing page
│   │   └── globals.css    # Global styles
│   ├── components/        # UI components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Contact.tsx
│   │   ├── PolaroidFrame.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── ThemeProvider.tsx
│   └── lib/
│       └── data.ts        # Personal info
├── SPEC.md                # Full specification
├── README.md
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

Deployed to Vercel — auto-deploys on push to `main`.

## Links

- GitHub: https://github.com/LazyMisha
- LinkedIn: https://linkedin.com/in/mikhailo-trunov
