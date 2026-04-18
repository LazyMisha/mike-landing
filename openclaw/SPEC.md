# Specification

## Purpose

This repository is a professional portfolio for Mykhailo Trunov, aimed at recruiters, hiring managers, and engineering teams.
AI-generated changes should support that purpose and keep the site concise, credible, and editorial rather than marketing-heavy.

## Product Principles

- Minimalist, developer-focused, and content-first
- Monospace visual language with restrained use of accent color
- Terminal motifs support navigation and tone, but should not turn the site into a novelty terminal clone
- Copy should stay direct, professional, and easy to scan
- Accessibility and performance are baseline requirements, not optional enhancements

---

## Design System

### Colors

Use the CSS variables in `src/app/globals.css` as the source of truth.

**Light:**
- Background: `#f5f5ff`
- Text: `#1a1a1a`

**Dark:**
- Background: `#0a0a0a`
- Text: `#f0f0f0`

**Accent usage:**
- Interactive terminal-style links use lime accents
- Accent color should stay focused on links, labels, and highlights rather than large decorative fills

### Typography

**Font stack:** system monospace

```text
ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace
```

**Shared primitives:**
- `Heading`
- `Body`
- `Small`

### Layout

- Default content width: `max-w-[75ch]`
- Default horizontal padding: `px-4`
- The home page shifts from stacked to two-column at `md`
- Pages should feel airy and text-led, not dense or dashboard-like

### Responsive Behavior

- Mobile-first Tailwind classes only
- The hero stacks vertically on small screens
- The polaroid caption always shows the full metadata string and changes text size by breakpoint instead of hiding segments
- Placeholder pages remain simple and readable on all screen sizes

---

## Current Pages

### `/`

**Purpose:** landing page and primary introduction

**Required behavior:**
- Show live datetime and location in the global header
- Show theme toggle in the global header
- Show hero photo and metadata caption
- Show social contact links
- Keep the visual tone sparse and editorial

### `/experience`

**Purpose:** primary content listing

**Required behavior:**
- Render every item from the experience content source
- Link each item to `/experience/[id]`
- Keep terminal-style navigation visible

### `/experience/[id]`

**Purpose:** detailed view for one experience entry

**Required behavior:**
- Resolve content for the selected entry
- Fail safely for invalid ids
- Render overview, technologies, key achievements, and timeline
- Preserve loading and not-found behavior for the route

### `/projects`, `/case-studies`, `/notes`

**Purpose:** placeholder sections ready for future expansion

**Current behavior:**
- Use the shared page shell
- Show terminal prompt and back link
- Show brief placeholder copy only

---

## Non-Negotiable Behavior

- The global layout includes theme handling, scroll reset, header, and footer.
- The header shows live day/time plus the current location.
- Theme switching respects system preference.
- Navigation changes scroll back to the top.
- Terminal-style navigation labels stay consistent across the app.
- The experience detail route must fail safely on unknown ids.
- The polaroid caption remains in the frame footer overlay.

---

## Acceptance Criteria For AI Changes

- The site still reads as a professional portfolio, not a generic template.
- The mono/editorial visual language remains intact.
- User-facing behavior remains coherent across breakpoints.
- Server and client boundaries remain justified.
- Relevant tests are added or updated when behavior changes.
- Verification is run for the affected area.
- OpenClaw docs are updated when product behavior changes.
