# AppnixTech UI README

This document explains the UI system of this project so it is easy to understand, maintain, and prompt against.

## 1. UI Overview

The app is a single-page marketing site with section-based navigation.

Main route: `/`

Section order in `src/pages/Index.tsx`:
1. Navbar
2. HeroSection
3. AboutSection
4. ServicesSection
5. TechStackSection
6. PortfolioSection
7. WhyChooseUsSection
8. ProcessSection
9. TestimonialsSection
10. ContactSection
11. FAQSection
12. Footer

## 2. UI Libraries Used

Core UI stack:
- React 18 + TypeScript + Vite
- Tailwind CSS
- shadcn/ui component patterns
- Radix UI primitives (`@radix-ui/*`)
- `class-variance-authority`, `clsx`, `tailwind-merge`

Animation + motion:
- `framer-motion` for section entry/stagger/menu transitions
- `tailwindcss-animate` for Radix data-state animations (dialog, popover, dropdown, etc.)
- Custom Tailwind keyframes in `tailwind.config.ts`

Icons + visual utilities:
- `lucide-react`
- `sonner` + shadcn toast

Theme:
- Dark mode via `class="dark"` strategy in Tailwind (`darkMode: ["class"]`)
- Theme toggle implemented in `src/components/ThemeToggle.tsx`
- `next-themes` is installed and used by `src/components/ui/sonner.tsx`

## 3. Animation Features (Implemented)

### 3.1 Framer Motion (section and layout animations)
Used in:
- `HeroSection.tsx`
- `Navbar.tsx` (`AnimatePresence` for mobile menu)
- `AboutSection.tsx`
- `ServicesSection.tsx`
- `TechStackSection.tsx`
- `PortfolioSection.tsx`
- `WhyChooseUsSection.tsx`
- `ProcessSection.tsx`
- `TestimonialsSection.tsx`
- `PricingSection.tsx`
- `FAQSection.tsx`
- `ContactSection.tsx`

Typical motion patterns:
- Fade + slide up: `initial { opacity: 0, y: 20/30 } -> animate { opacity: 1, y: 0 }`
- Scale-in for badges/chips: `initial { scale: 0.9 } -> animate { scale: 1 }`
- Staggered cards via transition delays (`i * 0.04`, `i * 0.08`, `i * 0.1`, etc.)
- Mobile nav open/close height transition with `AnimatePresence`

### 3.2 Tailwind custom keyframes and utility animations
Defined in `tailwind.config.ts`:
- `accordion-down`
- `accordion-up`
- `fade-in`
- `fade-in-left`
- `float`
- `pulse-glow`

Mapped animation utilities:
- `animate-accordion-down`
- `animate-accordion-up`
- `animate-fade-in`
- `animate-fade-in-left`
- `animate-float`
- `animate-pulse-glow`

### 3.3 Radix state animations
UI primitives use state-driven classes like:
- `data-[state=open]:animate-in`
- `data-[state=closed]:animate-out`
- `fade-in-0`, `fade-out-0`
- `zoom-in-95`, `zoom-out-95`
- `slide-in-from-*`, `slide-out-to-*`

These are provided by `tailwindcss-animate` and used in dialog, sheet, popover, dropdown, tooltip, toast, etc.

## 4. Color System and Theme Tokens

Theme tokens are defined in `src/index.css` and consumed as HSL variables in Tailwind.

### 4.1 Light theme (`:root`)
- `--background: 220 20% 97%`
- `--foreground: 230 25% 12%`
- `--card: 0 0% 100%`
- `--card-foreground: 230 25% 12%`
- `--popover: 0 0% 100%`
- `--popover-foreground: 230 25% 12%`
- `--primary: 190 95% 42%`
- `--primary-foreground: 0 0% 100%`
- `--secondary: 220 14% 92%`
- `--secondary-foreground: 230 25% 12%`
- `--muted: 220 14% 95%`
- `--muted-foreground: 220 10% 46%`
- `--accent: 270 80% 60%`
- `--accent-foreground: 0 0% 100%`
- `--destructive: 0 84% 60%`
- `--destructive-foreground: 0 0% 100%`
- `--border: 220 14% 90%`
- `--input: 220 14% 90%`
- `--ring: 190 95% 42%`
- `--radius: 0.75rem`

Extra visual tokens:
- `--gradient-primary: linear-gradient(135deg, hsl(190, 95%, 42%), hsl(270, 80%, 60%))`
- `--gradient-card: linear-gradient(135deg, hsl(220, 14%, 96%), hsl(220, 14%, 100%))`
- `--shadow-glow: 0 0 40px -10px hsl(190 95% 42% / 0.2)`
- `--shadow-card: 0 4px 24px -4px hsl(230 25% 12% / 0.06)`

### 4.2 Dark theme (`.dark`)
- `--background: 230 25% 7%`
- `--foreground: 210 40% 96%`
- `--card: 230 22% 10%`
- `--card-foreground: 210 40% 96%`
- `--popover: 230 22% 10%`
- `--popover-foreground: 210 40% 96%`
- `--primary: 190 95% 50%`
- `--primary-foreground: 230 25% 7%`
- `--secondary: 230 18% 16%`
- `--secondary-foreground: 210 40% 96%`
- `--muted: 230 18% 14%`
- `--muted-foreground: 220 10% 55%`
- `--accent: 270 80% 65%`
- `--accent-foreground: 0 0% 100%`
- `--destructive: 0 62% 30%`
- `--destructive-foreground: 210 40% 98%`
- `--border: 230 18% 18%`
- `--input: 230 18% 18%`
- `--ring: 190 95% 50%`

Dark mode visual tokens:
- `--gradient-primary: linear-gradient(135deg, hsl(190, 95%, 50%), hsl(270, 80%, 65%))`
- `--gradient-card: linear-gradient(135deg, hsl(230, 22%, 12%), hsl(230, 22%, 15%))`
- `--shadow-glow: 0 0 60px -10px hsl(190 95% 50% / 0.3)`
- `--shadow-card: 0 4px 24px -4px hsl(0 0% 0% / 0.3)`

### 4.3 Sidebar tokens
Separate tokens exist for sidebar palette:
- `--sidebar-background`
- `--sidebar-foreground`
- `--sidebar-primary`
- `--sidebar-primary-foreground`
- `--sidebar-accent`
- `--sidebar-accent-foreground`
- `--sidebar-border`
- `--sidebar-ring`

## 5. Shared UI Utility Classes

From `src/index.css`:
- `.glass-card`: translucent card with blur + border + card shadow
- `.gradient-text`: primary gradient text treatment
- `.gradient-border`: gradient outline via masked pseudo-element
- `.glow-effect`: glow shadow for primary CTAs
- `.section-padding`: standard vertical spacing
- `.container-custom`: responsive horizontal container

## 6. Typography

Configured in `tailwind.config.ts`:
- Heading: `"Space Grotesk"`
- Body: `"Inter"`

Applied globally:
- `body` uses `font-body`
- `h1-h6` use `font-heading`

## 7. Theme Behavior

Current behavior in `ThemeToggle.tsx`:
- Theme state is local (`isDark`), default `true`
- `.dark` class is applied/removed on `document.documentElement`
- App boots in dark mode by default (`document.documentElement.classList.add("dark")`)
- Toggle icon animation uses rotate + scale transitions for Sun/Moon swap

## 8. Prompt-Ready UI Spec

Use this when asking for new UI work in this repo:

```text
Build [SECTION/COMPONENT] for AppnixTech using existing UI language.

Constraints:
- Keep Tailwind token usage (`bg-background`, `text-foreground`, `border-border`, `text-muted-foreground`, `bg-primary`, `text-primary-foreground`).
- Support both light and dark themes via existing CSS variables in `src/index.css`.
- Use Framer Motion for entry animation (fade + y offset), duration 0.5-0.8s.
- Reuse utility classes: glass-card, gradient-text, glow-effect, container-custom, section-padding.
- Match typography: heading = Space Grotesk, body = Inter.
- Mobile first; ensure layout remains clean on small screens.
- Keep interaction transitions subtle (`transition-all duration-300`).

Deliver:
1) Component TSX
2) Any required token/class updates (only if needed)
3) Short explanation of animation + theme compliance
```

## 9. Quick Dev Commands

From project root:
- `npm install`
- `npm run dev`
- `npm run build`
- `npm run test`

## 10. Key Files

- `src/pages/Index.tsx` - section composition order
- `src/components/ThemeToggle.tsx` - dark/light toggle logic
- `src/index.css` - full theme token system and utility classes
- `tailwind.config.ts` - theme mapping, keyframes, animations
- `src/components/*Section.tsx` - motion-enabled content sections
- `src/components/ui/*` - reusable primitives and Radix animated components
