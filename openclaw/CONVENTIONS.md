# Conventions

## TypeScript

- No `any` type
- Explicit types for all functions
- Use `interface` for object shapes
- Use `type` for unions and complex types
- Export types with `export type`

## React/Next.js

- Functional components only
- Server Components by default
- Client Components only when needed (state, effects, browser APIs)
- Use `"use client"` directive at top of file
- Create explicit prop interfaces
- Compose small, focused components

## Code Organization

- No hardcoded values - use `src/lib/constants.ts`
- Components: PascalCase (`ExperienceCard.tsx`)
- Utilities: camelCase (`experience-data.ts`)
- Tests: `.test.tsx` alongside component
- Group by feature, not type

## File Naming

```
✅ ExperienceCard.tsx
✅ experience-data.ts
✅ ExperienceCard.test.tsx
❌ experienceCard.tsx
❌ ExperienceCardTest.tsx
```

## Accessibility

- Semantic HTML (`<header>`, `<main>`, `<footer>`)
- `aria-label` on interactive elements
- `aria-hidden` on decorative elements
- Visible focus states
- Alt text on all images

## Git

**Commits:**
```
feat: add experience detail page
fix: resolve type error in Header
docs: update README
test: add unit tests
refactor: extract navigation
chore: update dependencies
```

**Branches:**
```
✅ feature/experience-detail-pages
✅ fix/header-sticky-position
❌ patch-1
❌ my-branch
```

**PRs:**
- One PR = one feature
- Single commit
- Clear description
- Screenshots for UI changes

## Performance

- Use Next.js Image component
- Prefer WebP/AVIF formats
- Dynamic imports for heavy components
- Import only what you need

## Security

- No hardcoded secrets
- Use environment variables
- React escapes by default (no dangerouslySetInnerHTML)

## Review Checklist

Before submitting:

- [ ] No `any` types
- [ ] Explicit prop interfaces
- [ ] Server Components by default
- [ ] No hardcoded values
- [ ] Semantic HTML
- [ ] Accessibility attributes
- [ ] Tests passing
- [ ] `npm run lint` clean
- [ ] `npm run typecheck` clean
- [ ] `npm run build` succeeds
