/**
 * Navigation Configuration
 * Centralized navigation structure for consistent routing across the app
 */

export interface NavLink {
  name: string;
  href: string;
  isRoute?: boolean; // true for page routes, false for scroll links
}

export const MAIN_NAV_LINKS: NavLink[] = [
  { name: "Home", href: "/", isRoute: true },
  { name: "About", href: "#about", isRoute: false },
  { name: "Services", href: "#services", isRoute: false },
  { name: "Projects", href: "#projects", isRoute: false },
  { name: "Team", href: "#team", isRoute: false },
  { name: "Contact", href: "#contact", isRoute: false },
];

export const FOOTER_COMPANY_LINKS: NavLink[] = [
  { name: "Home", href: "/", isRoute: true },
  { name: "About Us", href: "#about", isRoute: false },
  { name: "Services", href: "#services", isRoute: false },
  { name: "Team", href: "#team", isRoute: false },
];

export const FOOTER_SERVICES_LINKS: NavLink[] = [
  { name: "Web Development", href: "#services", isRoute: false },
  { name: "Mobile Apps", href: "#services", isRoute: false },
  { name: "Cloud Solutions", href: "#services", isRoute: false },
  { name: "IT Consulting", href: "#services", isRoute: false },
];

export const FOOTER_LEGAL_LINKS: NavLink[] = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "Cookie Policy", href: "#" },
];

export interface SocialLink {
  icon: any; // Lucide icon component
  href: string;
  label: string;
}
