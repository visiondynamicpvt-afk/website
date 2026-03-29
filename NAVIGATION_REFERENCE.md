# Navigation Quick Reference

## Files Overview

### Core Navigation Files
| File | Purpose |
|------|---------|
| `src/config/navigation.ts` | Centralized navigation configuration |
| `src/components/Navbar.tsx` | Header navigation component |
| `src/components/Footer.tsx` | Footer navigation component |
| `src/App.tsx` | Route definitions |

### Pages
| Route | File | Status |
|-------|------|--------|
| `/` | `src/pages/Index.tsx` | ✅ Home page with sections |
| `/team` | `src/pages/Team.tsx` | ✅ Team members display |
| `*` | `src/pages/NotFound.tsx` | ✅ 404 page |

## Navigation Links

### Main Navigation (Navbar & Logo)
```
🏠 Home              → /
📖 About             → #about (scroll)
🛠️  Services         → #services (scroll)
📂 Projects          → #projects (scroll)
👥 Team              → /team
📧 Contact           → #contact (scroll)
```

### Footer Sections

**Company**
- Home → /
- About Us → #about (scroll)
- Services → #services (scroll)
- Team → /team

**Services**
- Web Development → #services (scroll)
- Mobile Apps → #services (scroll)
- Cloud Solutions → #services (scroll)
- IT Consulting → #services (scroll)

**Legal**
- Privacy Policy
- Terms of Service
- Cookie Policy

## Navigation Types

### 🔗 Page Routes (isRoute: true)
Navigate to different pages using React Router
- `/` - Home
- `/team` - Team page

### 🔀 Scroll Links (isRoute: false)
Scroll to section on home page using document IDs
- `#about` - About section
- `#services` - Services section
- `#projects` - Projects section
- `#contact` - Contact section

## Usage in Components

### Importing Navigation Config
```typescript
import { MAIN_NAV_LINKS, FOOTER_COMPANY_LINKS } from "@/config/navigation";
```

### Rendering Navigation Links
```typescript
{MAIN_NAV_LINKS.map((link) => (
  link.isRoute ? (
    <Link to={link.href}>{link.name}</Link>
  ) : (
    <button onClick={() => scrollToSection(link.href)}>
      {link.name}
    </button>
  )
))}
```

## Key Features Implemented

✅ Navbar with desktop & mobile menus
✅ Footer with company, services, and legal links
✅ Centralized navigation configuration
✅ Support for both page routes and scroll links
✅ Responsive design (mobile-first)
✅ Smooth animations and transitions
✅ Proper TypeScript typing
✅ Logo navigation (links to home)
✅ Team page with member cards
✅ 404 page for invalid routes

## Navigation Consistency

- **Both Navbar and Footer** use the same centralized config
- **All links** are type-safe and validated
- **Desktop & Mobile** menus work identically
- **Animations** are consistent across components
- **Mobile menu** closes automatically when navigating

## Current Pages Available

### Home Page (`/`)
- Hero section
- Stats section
- About section
- Services section
- Why Choose Us section
- CTA section
- Contact section
- Fully responsive

### Team Page (`/team`)
- Team hero section
- Team members grid (responsive)
- Team statistics
- Member card components with:
  - Avatar (with initials)
  - Name and position
  - Department badge
  - Email and LinkedIn links

### 404 Page (`*`)
- Handles all undefined routes
- Helps users navigate back

## Mobile Responsiveness

- Navbar: Hamburger menu on mobile, full nav on desktop
- Footer: Single column on mobile, multi-column on desktop
- Team page: 1 column on mobile, 2 on tablet, 4 on desktop
- All links work identically on mobile and desktop
