# Navigation Reference

## Current Route Map

| Route | File |
|---|---|
| / | src/pages/Index.tsx |
| * | src/pages/NotFound.tsx |

## Core Navigation Files

| File | Purpose |
|---|---|
| src/config/navigation.ts | Centralized link config for navbar and footer |
| src/components/Navbar.tsx | Header navigation and mobile menu |
| src/components/Footer.tsx | Footer navigation groups and social links |
| src/App.tsx | Route definitions |

## Link Behavior

Navigation uses two link types:

- Route links where isRoute is true. These use react-router Link and navigate between pages.
- Scroll links where isRoute is false. These use document selectors and smooth scrolling.

Current section anchors used in the app:

- #about
- #services
- #projects
- #team
- #contact

## Notes

- The app currently has one routed page (/). Team content is part of the home page section flow.
- Keep src/config/navigation.ts as the single source of truth for link labels and targets.
