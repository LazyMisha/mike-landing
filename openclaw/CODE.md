# Code Standards

## TypeScript

- No `any` - use explicit types
- Create interfaces for object shapes
- Export types: `export type Name = ...`
- Use `as const` for literal types (be aware of read-only implications)

## React/Next.js

### Component Types

- Functional components only
- Server Components by default
- Client Components only when needed:
  - State (`useState`, `useReducer`)
  - Effects (`useEffect`)
  - Event handlers
  - Browser APIs

### Props

```typescript
// ✅ Good
interface ComponentProps {
  title: string;
  onClick: () => void;
}

export function Component({ title }: ComponentProps) { ... }
```

### Memoization

```typescript
// Use for pure components
export default React.memo(function Component({ data }) { ... });

// Use for expensive calculations
const value = useMemo(() => compute(data), [data]);
```

## Code Organization

### Constants

```typescript
// ✅ Good - src/lib/constants.ts
export const navigationLabels = {
  backToHome: '[ back to home ]',
};

// Use in components
<Link>← {navigationLabels.backToHome}</Link>
```

### File Naming

- Components: `PascalCase.tsx`
- Utilities: `camelCase.ts`
- Tests: `*.test.tsx`

### Imports

```typescript
// ✅ Good
import { useState } from 'react';
import { Button } from '@/components/ui/button';

// ❌ Bad
import * as React from 'react';
```

## Accessibility

```typescript
// ✅ Semantic HTML
<header>...</header>
<main>...</main>
<footer>...</footer>

// ✅ ARIA
<section aria-labelledby="heading">
  <h2 id="heading">Title</h2>
</section>

// ✅ Hide decorative
<span aria-hidden="true">│</span>

// ✅ Screen reader only
<span className="sr-only">Navigation</span>
```

## Testing

```typescript
describe('Component', () => {
  it('renders correctly', () => {
    render(<Component prop="value" />);
    expect(screen.getByText('value')).toBeInTheDocument();
  });
});
```

**Query priority:**
1. `getByRole()`
2. `getByLabelText()`
3. `getByText()`
4. `getByTestId()` (last resort)

## Performance

### Images

```typescript
<Image
  src="/photo.webp"
  alt="Description"
  width={2124}
  height={2832}
  loading="eager"  // For LCP
  priority         // For above-fold
/>
```

### Code Splitting

```typescript
const HeavyComponent = dynamic(() => import('./Heavy'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
```

## Security

- No hardcoded secrets
- Use `process.env.NEXT_PUBLIC_*`
- React escapes by default (avoid `dangerouslySetInnerHTML`)

## Git

**Commits:**
```
feat: add feature
fix: fix bug
docs: update docs
test: add tests
refactor: refactor code
chore: update deps
```

**Branches:**
```
feature/description
fix/description
docs/description
```

**PRs:**
- One feature per PR
- Single commit
- Clear description
