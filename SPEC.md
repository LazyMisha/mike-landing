# Mike's Landing Page — Specification

## 1. Overview

**Project:** Personal portfolio landing page for Mike Trunov (Front-end Engineer)

**Goal:** Minimalist, single-page CV site to share with recruiters, HRs, and engineers. Clean, professional, developer-focused design.

**Target Users:** Recruiters, HR professionals, fellow engineers

---

## 2. Design

### Visual Style
- **Aesthetic:** Minimalist, editorial, brutalist typography
- **Mood:** Developer-focused, clean, confident
- **Background Colors:**
  - Light: `#F5F5FF` (pale lavender)
  - Dark: `#0a0a0a` (deep black)

### Typography
- **Font Stack:** System monospace
  ```
  ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace
  ```
- No external font dependencies (Google Fonts forbidden)

### Layout
- Single-page, mobile-first
- Generous whitespace / negative space
- Asymmetrical composition

---

## 3. Sections

### Header
| Position | Content |
|----------|---------|
| Left | Live datetime + location (e.g., "Sat 14:01, Poland") |
| Right | Theme toggle (dark/light) |

### Hero
| Element | Content |
|---------|---------|
| Main Text | "Hey, I am Mykhailo" (large, bold) |
| Photo | Polaroid-style tilted frame with photo |
| Tagline | "Creative software engineer passionate about functional design." |

### Contact
| Element | Content |
|---------|---------|
| Text | Brief sentence |
| Email | Clickable email link |

---

## 4. Links

| Link | URL |
|------|-----|
| GitHub | `https://github.com/LazyMisha` |
| LinkedIn | `https://linkedin.com/in/mikhailo-trunov` |
| Portfolio | `/projects` (future page) |
| Download CV | `/cv.pdf` (future) |

---

## 5. Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 16 | Framework |
| Tailwind CSS 4 | Styling |
| next-themes | Dark/light theme |
| TypeScript | Type safety |
| Vercel | Deployment |

### What We DON'T Use
- ❌ Google Fonts (forbidden)
- ❌ External icon libraries (use inline SVG or Lucide)
- ❌ CSS-in-JS (use Tailwind only)

---

## 6. Components

| Component | File | Description |
|------------|------|-------------|
| `ThemeProvider` | `components/ThemeProvider.tsx` | Theme context wrapper |
| `ThemeToggle` | `components/ThemeToggle.tsx` | Sun/Moon toggle button |
| `Header` | `components/Header.tsx` | Top bar with datetime + theme |
| `Hero` | `components/Hero.tsx` | Main section with photo + text |
| `PolaroidFrame` | `components/PolaroidFrame.tsx` | Styled photo frame |
| `Contact` | `components/Contact.tsx` | Email section |

---

## 7. Data Model

```typescript
// src/lib/data.ts
interface PersonalInfo {
  name: string;           // "Mykhailo"
  tagline: string;         // "Creative software engineer passionate about functional design."
  location: string;       // "Poland"
  email: string;          // "your@email.com"
}

interface SocialLinks {
  github: string;
  linkedin: string;
  portfolio?: string;
  cv?: string;
}

interface LandingPageData {
  personal: PersonalInfo;
  socials: SocialLinks;
  photo: string;          // URL to photo
}
```

---

## 8. File Structure

```
mike-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Contact.tsx
│   │   ├── PolaroidFrame.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── ThemeProvider.tsx
│   └── lib/
│       └── data.ts
├── next.config.ts
├── tailwind.config.ts
├── SPEC.md
├── README.md
└── package.json
```

---

## 9. Accessibility

- Semantic HTML (`<header>`, `<main>`, `<footer>`)
- Keyboard navigation support
- Color contrast: WCAG AA minimum
- Alt text for images
- Focus states visible

---

## 10. Deployment

- **GitHub:** `LazyMisha/mike-landing`
- **Vercel:** Auto-deploy on push to `main`
- **URL:** `mike-landing.vercel.app`

---

## 11. Build Order

1. ✅ Initialize project
2. **SPEC.md** ← YOU ARE HERE
3. **README.md** ← NEXT
4. Setup theme (next-themes)
5. Build Header
6. Build Hero + PolaroidFrame
7. Build Contact
8. Responsive test
9. Deploy to Vercel

---

## 12. Testing Checklist

- [ ] Light mode renders correctly
- [ ] Dark mode renders correctly
- [ ] Theme toggle works
- [ ] Photo displays in polaroid frame
- [ ] Email link is clickable
- [ ] Mobile layout (320px+)
- [ ] Desktop layout (1024px+)
- [ ] Build passes (`npm run build`)
- [ ] Lint passes (`npm run lint`)
- [ ] Vercel deployment succeeds
