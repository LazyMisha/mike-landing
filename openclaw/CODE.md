# Coding Standards & Best Practices

## TypeScript

### Type Safety

#### ✅ DO: Always create explicit types
```typescript
// ✅ Good
interface Experience {
  id: string;
  title: string;
  company: string;
}

type ExperienceList = Experience[];
```

#### ❌ DON'T: Use `any` or implicit types
```typescript
// ❌ Bad
const data: any = getData();

// ❌ Bad - implicit any
const processData = (data) => { ... };

// ✅ Good
const processData = (data: Experience[]): ProcessedData[] => { ... };
```

### Interfaces vs Types

#### Use `interface` for object shapes
```typescript
interface ComponentProps {
  title: string;
  onClick: () => void;
}
```

#### Use `type` for unions, primitives, and complex types
```typescript
type Theme = 'light' | 'dark';
type ID = string | number;
type Callback = (data: Result) => void;
```

### Type Exports

#### ✅ DO: Export types with `export type`
```typescript
export type Experience = {
  id: string;
  title: string;
};
```

#### ✅ DO: Use `interface` for public APIs
```typescript
export interface LandingPageData {
  personal: PersonalInfo;
  hero: HeroInfo;
}
```

### Const Assertions

#### ✅ DO: Use `as const` for literal types
```typescript
const routes = ['/home', '/about'] as const;
type Route = typeof routes[number];
```

#### ⚠️ CAUTION: Be aware of read-only implications
```typescript
// This creates deeply immutable types
const experiences = [...] as const;
// experiences.push() // ❌ Error - read-only array
```

---

## React & Next.js

### Component Types

#### ✅ DO: Use functional components only
```typescript
// ✅ Good
export function Header() {
  return <header>...</header>;
}

// ❌ Bad - no class components
export class Header extends React.Component { ... }
```

### Server vs Client Components

#### ✅ DO: Default to Server Components
```typescript
// ✅ Good - Server Component (default)
export default async function ExperiencePage() {
  const data = await fetchData();
  return <div>{data}</div>;
}
```

#### ✅ DO: Use Client Components only when needed
```typescript
// ✅ Good - Client Component only when necessary
"use client";

export function ThemeToggle() {
  const [theme, setTheme] = useState('light');
  return <button onClick={() => setTheme('dark')}>Toggle</button>;
}
```

**When to use Client Components:**
- ✅ State management (`useState`, `useReducer`)
- ✅ Lifecycle effects (`useEffect`)
- ✅ Event handlers (`onClick`, `onChange`)
- ✅ Browser APIs (`window`, `localStorage`)
- ✅ Context providers

**When to use Server Components:**
- ✅ Data fetching
- ✅ Static content
- ✅ SEO-critical content
- ✅ Security-sensitive logic
- ✅ Large dependencies (reduce bundle size)

### Props Typing

#### ✅ DO: Create explicit prop interfaces
```typescript
interface ExperienceCardProps {
  title: string;
  company: string;
  dateRange: string;
  description: string;
  linkHref: string;
}

export function ExperienceCard({ title, company }: ExperienceCardProps) {
  return <div>{title}</div>;
}
```

#### ❌ DON'T: Use inline prop types
```typescript
// ❌ Bad
export function ExperienceCard({ 
  title, 
  company 
}: { 
  title: string; 
  company: string; 
}) {
  return <div>{title}</div>;
}
```

### Component Composition

#### ✅ DO: Compose small, focused components
```typescript
// ✅ Good
export function ExperienceList({ experiences }: ExperienceListProps) {
  return (
    <section>
      {experiences.map(exp => (
        <ExperienceCard key={exp.id} {...exp} />
      ))}
    </section>
  );
}
```

#### ❌ DON'T: Create monolithic components
```typescript
// ❌ Bad - too many responsibilities
export function ExperiencePage() {
  // 200 lines of JSX with nested logic
}
```

### Hooks

#### ✅ DO: Follow Rules of Hooks
```typescript
// ✅ Good - hooks at top level
function useExperience(id: string) {
  const [experience, setExperience] = useState<Experience | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // fetch logic
  }, [id]);
  
  return { experience, loading };
}
```

#### ✅ DO: Create custom hooks for reusability
```typescript
// ✅ Good
function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  const toggle = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  return { theme, toggle };
}
```

### Memoization

#### ✅ DO: Use `React.memo()` for pure components
```typescript
// ✅ Good - prevents unnecessary re-renders
export default React.memo(function ExperienceDetail({ 
  experience 
}: ExperienceDetailProps) {
  return <div>{experience.title}</div>;
});
```

#### ✅ DO: Use `useMemo` for expensive calculations
```typescript
// ✅ Good
const sortedExperiences = useMemo(() => {
  return experiences.sort((a, b) => a.date.localeCompare(b.date));
}, [experiences]);
```

#### ❌ DON'T: Over-optimize prematurely
```typescript
// ❌ Bad - unnecessary memoization
const simpleValue = useMemo(() => 42, []);
```

---

## Code Organization

### Constants

#### ✅ DO: Extract hardcoded values to constants
```typescript
// ✅ Good - src/lib/constants.ts
export const navigationLabels = {
  backToHome: '[ back to home ]',
  backToExperienceList: '[ back to experience list ]',
};

export const errorMessages = {
  experienceNotFound: 'Error: Experience not found',
};

// ✅ Use in components
<Link>← {navigationLabels.backToExperienceList}</Link>
```

#### ❌ DON'T: Hardcode values in components
```typescript
// ❌ Bad
<Link>← [ back to experience list ]</Link>
<p>Error: Experience not found</p>
```

### File Naming

#### Components: PascalCase
```
✅ ExperienceCard.tsx
✅ ThemeToggle.tsx
❌ experienceCard.tsx
❌ experience_card.tsx
```

#### Utilities: camelCase
```
✅ utils.ts
✅ experience-data.ts
❌ Utils.ts
❌ experience_data.ts
```

#### Tests: `.test.tsx` or `.test.ts`
```
✅ ExperienceCard.test.tsx
✅ utils.test.ts
❌ ExperienceCardTest.tsx
```

### Directory Structure

#### Group by feature, not type
```
✅ Good
src/
  app/
    experience/
      page.tsx
      ExperienceList.tsx
      ExperienceCard.tsx
  components/
    shared/
      Button.tsx

❌ Bad
src/
  components/
    ExperiencePage.tsx
    ExperienceList.tsx
  pages/
    experience.tsx
```

---

## Accessibility

### Semantic HTML

#### ✅ DO: Use semantic elements
```typescript
// ✅ Good
<header>...</header>
<main>...</main>
<footer>...</footer>
<article>...</article>
<section>...</section>
<nav>...</nav>
```

#### ❌ DON'T: Use divs for everything
```typescript
// ❌ Bad
<div className="header">...</div>
<div className="main">...</div>
<div className="footer">...</div>
```

### ARIA Attributes

#### ✅ DO: Add aria-labels to sections
```typescript
// ✅ Good
<section aria-labelledby="overview-heading">
  <h2 id="overview-heading">
    <span aria-hidden="true">[ Overview ]</span>
    <span className="sr-only">Overview</span>
  </h2>
</section>
```

#### ✅ DO: Hide decorative elements
```typescript
// ✅ Good
<span aria-hidden="true">│</span>
<span aria-hidden="true">├─</span>
```

#### ✅ DO: Use screen-reader-only class
```typescript
// ✅ Good - visually hidden but accessible
<h2 className="sr-only">Navigation</h2>
```

### Keyboard Navigation

#### ✅ DO: Ensure all interactive elements are focusable
```typescript
// ✅ Good
<button onClick={handleClick}>Click me</button>
<Link href="/page">Navigate</Link>
```

#### ✅ DO: Add visible focus states
```typescript
// ✅ Good
<button className="focus:underline focus:outline-none">
  Click me
</button>
```

#### ❌ DON'T: Remove outline without replacement
```typescript
// ❌ Bad
<button className="focus:outline-none">
  Click me
</button>
```

### Images

#### ✅ DO: Add alt text to all images
```typescript
// ✅ Good
<Image 
  src="/photo.webp" 
  alt="Mykhailo Trunov" 
  width={2124} 
  height={2832} 
/>
```

#### ✅ DO: Use empty alt for decorative images
```typescript
// ✅ Good
<Image 
  src="/decorative-pattern.png" 
  alt="" 
  aria-hidden="true"
/>
```

---

## Testing

### Test Coverage

#### ✅ DO: Write tests for all components
```typescript
// ✅ Good
describe('ExperienceCard', () => {
  it('renders title correctly', () => {
    render(<ExperienceCard title="Engineer" {...props} />);
    expect(screen.getByText('Engineer')).toBeInTheDocument();
  });
  
  it('renders company with @ prefix', () => {
    render(<ExperienceCard company="Acme" {...props} />);
    expect(screen.getByText('@ Acme')).toBeInTheDocument();
  });
});
```

### Test Structure

#### ✅ DO: Use describe/it blocks
```typescript
// ✅ Good
describe('ComponentName', () => {
  it('does something specific', () => {
    // test
  });
  
  it('handles edge case', () => {
    // test
  });
});
```

### Testing Library

#### ✅ DO: Query by role first
```typescript
// ✅ Good - preferred queries
screen.getByRole('button');
screen.getByRole('heading', { level: 1 });
screen.getByLabelText('Search');

// ✅ Good - fallback queries
screen.getByText('Submit');
screen.getByPlaceholderText('Email');
screen.getByTestId('custom-id');
```

#### ❌ DON'T: Use brittle queries
```typescript
// ❌ Bad
container.querySelector('.button-class');
document.getElementById('my-id');
```

---

## Git & Commits

### Commit Messages

#### ✅ DO: Use conventional commits
```
feat: add experience detail page
fix: resolve type error in Header component
docs: update README with installation steps
test: add unit tests for ExperienceCard
refactor: extract navigation to separate component
chore: update dependencies
```

### Branch Naming

#### ✅ DO: Use descriptive branch names
```
✅ feature/experience-detail-pages
✅ fix/header-sticky-position
✅ docs/update-readme
❌ patch-1
❌ fix
❌ my-branch
```

### Pull Requests

#### ✅ DO: One PR = one feature
- Single commit per PR
- Clear description
- Link to issues
- Screenshots if UI changes

#### ❌ DON'T: Mix unrelated changes
- Don't combine feature + refactor + fix
- Don't include old commits

---

## Performance

### Images

#### ✅ DO: Use Next.js Image component
```typescript
// ✅ Good
import Image from 'next/image';

<Image
  src="/photo.webp"
  alt="Description"
  width={2124}
  height={2832}
  loading="eager"  // For LCP image
  priority         // For above-fold images
/>
```

#### ✅ DO: Optimize image formats
```
✅ WebP (modern browsers)
✅ AVIF (best compression)
❌ PNG (unless transparency needed)
❌ JPEG (use WebP instead)
```

### Bundle Size

#### ✅ DO: Import only what you need
```typescript
// ✅ Good
import { useState } from 'react';
import { Button } from '@/components/ui/button';

// ❌ Bad
import * as React from 'react';
import * as UI from '@/components/ui';
```

### Code Splitting

#### ✅ DO: Use dynamic imports for heavy components
```typescript
// ✅ Good
const HeavyChart = dynamic(() => import('@/components/HeavyChart'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
```

---

## Security

### XSS Prevention

#### ✅ DO: Escape user input
```typescript
// ✅ Good - React escapes by default
<div>{userInput}</div>

// ❌ Bad - dangerous
<div dangerouslySetInnerHTML={{ __html: userInput }} />
```

### Environment Variables

#### ✅ DO: Use environment variables for secrets
```typescript
// ✅ Good
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

// ❌ Bad - hardcoded
const apiKey = 'sk-1234567890';
```

---

## Documentation

### Component Documentation

#### ✅ DO: Add JSDoc comments
```typescript
/**
 * Displays a single experience entry with title, company, and description.
 * 
 * @param title - Job title
 * @param company - Company name
 * @param dateRange - Employment period
 * @param linkHref - Link to detail page
 */
interface ExperienceCardProps {
  title: string;
  company: string;
  dateRange: string;
  linkHref: string;
}
```

### Code Comments

#### ✅ DO: Explain "why", not "what"
```typescript
// ✅ Good - explains reasoning
// Using CSS grid instead of flexbox for better alignment control
// See: https://css-tricks.com/grid-vs-flexbox

// ❌ Bad - states the obvious
// Create a div element
<div>...</div>
```

---

## Review Checklist

Before submitting code:

- [ ] TypeScript types are explicit (no `any`)
- [ ] Components are functional (no classes)
- [ ] Server Components by default (Client only when needed)
- [ ] No hardcoded values (use constants)
- [ ] Semantic HTML used
- [ ] Accessibility attributes added
- [ ] Tests written and passing
- [ ] Lint passes (`npm run lint`)
- [ ] Type check passes (`npm run typecheck`)
- [ ] Build succeeds (`npm run build`)
- [ ] Commit message follows convention
- [ ] Branch name is descriptive

---

## Resources

- [React Documentation](https://react.dev)
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [WebAIM Accessibility](https://webaim.org/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Last Updated:** 2026-04-18  
**Version:** 1.0  
**Status:** Active
