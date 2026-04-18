# Specification

## Product

- portfolio for Mykhailo Trunov
- audience: recruiters, hiring managers, engineering teams
- tone: concise, professional, editorial
- terminal motif: supportive, not gimmick

## Design

- light theme: background `#f5f5ff`, text `#1a1a1a`
- dark theme: background `#0a0a0a`, text `#f0f0f0`
- accent: lime links and labels only
- typography: system monospace stack
- layout: `max-w-[75ch]`, `px-4`, stacked on mobile, two-column hero from `md`
- caption: full metadata at all breakpoints; text size scales by breakpoint

## Pages

- `/`: landing page; live datetime + location; theme toggle; hero photo + metadata caption; social links
- `/experience`: all experience entries; links to `/experience/[id]`; terminal-style navigation
- `/experience/[id]`: overview, technologies, key achievements, timeline; invalid id -> not found; loading state present
- `/projects`: placeholder; terminal prompt + back link + short placeholder copy
- `/case-studies`: placeholder; terminal prompt + back link + short placeholder copy
- `/notes`: placeholder; terminal prompt + back link + short placeholder copy

## Non-Negotiable

- portfolio must not read like a generic template
- pages stay sparse and text-led
- theme respects system preference
- navigation scrolls to top on route change
- terminal labels stay consistent across routes
- polaroid caption stays in the frame footer overlay
- experience detail fails safely on unknown ids
- placeholder pages stay intentionally minimal until replaced

## Acceptance Criteria

- behavior stays coherent across mobile and desktop
- mono/editorial visual language stays intact
- route behavior stays intact
- shared shell behavior stays intact
- tests change with behavior when needed
- relevant checks run before completion
