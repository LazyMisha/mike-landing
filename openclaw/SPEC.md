# Product State

## Purpose

Personal portfolio for Mykhailo Trunov.

Audience:
- recruiters
- hiring managers
- engineering teams

Tone:
- concise
- professional
- editorial
- personal enough to avoid feeling like a template

## Visual Language

- minimalist editorial layout
- system monospace typography
- light off-white / dark near-black theme
- lime accent color
- terminal motif used as navigation language, not as a gimmick
- sparse, text-led pages
- responsive mobile and desktop behavior

## Routes

- `/` — landing page with hero, live datetime/location, photo metadata, theme toggle, and navigation links
- `/experience` — experience list with total count and links to detail pages
- `/experience/[id]` — experience detail with role, company, date, location, description, technologies, and achievements
- `/projects` — project list with total count, project summary, and direct live/source links when available
- `/projects/[id]` — project detail with title/company header, description, technologies, external links, and achievements
- `/case-studies` — case-study list with total count and links to detail pages
- `/case-studies/[id]` — case-study detail with title, problem, solution, results, and technologies
- `/cv-preview` — static professional profile preview with summary, skills, experience preview, portfolio links, and CV download action
- `/notes` — static notes page describing portfolio build process and decisions

## Behavior

- theme respects system preference and can be toggled
- terminal labels stay consistent across routes
- list pages link to their matching detail pages
- project cards can expose live project and source code links directly on the list page
- CV download uses a static PDF link; no generation or backend logic
- unknown detail ids fail safely with `notFound()`
- placeholder links/pages stay intentionally minimal until replaced

## Current Project Content

- `/projects` currently lists only QuizLab.
- QuizLab is a personal ISTQB exam preparation quiz built with vanilla JavaScript, CSS, and Webpack.
- QuizLab includes direct links to the live GitHub Pages deployment and source repository.
- QuizLab copy intentionally mentions that it was created without AI assistance before AI coding tools became mainstream.

## Acceptance Criteria

- product remains coherent across mobile and desktop
- editorial/mono visual language stays intact
- route behavior remains predictable
- detail routes fail safely on unknown ids
