# Mike's Landing Page

Minimalist personal portfolio for Mykhailo Trunov — Senior Front-end Engineer.

🔗 **Live:** https://mike-landing-swart.vercel.app

---

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run quality gate
npm run lint && npm run test && npm run typecheck && npm run build
```

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Theme:** next-themes (dark/light)
- **Testing:** Vitest
- **Deployment:** Vercel

---

## Features

- ✅ Responsive design (mobile-first)
- ✅ Dark/light theme toggle
- ✅ Terminal-style navigation
- ✅ Experience list with detail pages
- ✅ Auto-scroll on navigation
- ✅ Accessibility (WCAG AA)
- ✅ Performance optimized (100/100 Lighthouse)

---

## Documentation

For detailed information, see the `openclaw/` directory:

- 📋 **[SPEC.md](./openclaw/SPEC.md)** - Complete project specification
- 📝 **[CODE.md](./openclaw/CODE.md)** - Coding standards & best practices
- 🏗️ **[ARCHITECTURE.md](./openclaw/ARCHITECTURE.md)** - Architecture documentation

---

## Project Structure

```
mike-landing/
├── src/
│   ├── app/              # Next.js pages
│   ├── components/       # React components
│   └── lib/              # Data & utilities
├── openclaw/             # Documentation
├── public/               # Static assets
└── tests/                # Test files
```

---

## Quality Gate

All PRs must pass:

```bash
npm run lint        # ESLint (0 errors)
npm run test        # Vitest (all passing)
npm run typecheck   # TypeScript (0 errors)
npm run build       # Next.js build (success)
```

---

## Deployment

Auto-deploys to Vercel on push to `main` branch.

**Production URL:** https://mike-landing-swart.vercel.app

---

## License

Personal portfolio — all rights reserved.

---

**Last Updated:** 2026-04-18  
**Version:** 2.0
