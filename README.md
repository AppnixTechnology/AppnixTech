# AppnixTech - Modern Web Development Agency Website

A modern, responsive web development agency website built with React, TypeScript, and Tailwind CSS featuring smooth animations and dark/light theme support.

## 🚀 Features

- **Responsive Design** - Mobile-first approach, works on all devices
- **Dark/Light Theme** - Seamless theme switching with persistent preferences
- **Smooth Animations** - Framer Motion powered animations throughout
- **Glass Morphism UI** - Modern glassmorphic design elements
- **Contact Form Integration** - Google Sheets integration for form submissions
- **SEO Optimized** - Clean semantic HTML structure
- **Fast Performance** - Built with Vite for optimal loading speeds

## 🎨 Design System

### Color Palette

#### Light Theme
- **Background**: `hsl(220, 20%, 97%)` - Light grayish blue
- **Foreground**: `hsl(230, 25%, 12%)` - Dark blue-gray
- **Primary**: `hsl(190, 95%, 42%)` - Cyan blue
- **Accent**: `hsl(270, 80%, 60%)` - Purple
- **Muted**: `hsl(220, 14%, 95%)` - Light gray
- **Border**: `hsl(220, 14%, 90%)` - Subtle gray

#### Dark Theme
- **Background**: `hsl(230, 25%, 7%)` - Very dark blue
- **Foreground**: `hsl(210, 40%, 96%)` - Off white
- **Primary**: `hsl(190, 95%, 50%)` - Bright cyan
- **Accent**: `hsl(270, 80%, 65%)` - Bright purple
- **Muted**: `hsl(230, 18%, 14%)` - Dark gray
- **Border**: `hsl(230, 18%, 18%)` - Subtle dark gray

### Typography
- **Heading Font**: Space Grotesk (400, 500, 600, 700)
- **Body Font**: Inter (300-900)

### Custom CSS Classes
- `.glass-card` - Glassmorphic card with backdrop blur
- `.gradient-text` - Cyan to purple gradient text
- `.glow-effect` - Glowing shadow effect
- `.section-padding` - Responsive section spacing
- `.container-custom` - Responsive container with padding

## 📦 Tech Stack

### Core
- **React 18.3** - UI library
- **TypeScript 5.8** - Type safety
- **Vite 5.4** - Build tool
- **React Router 6.30** - Routing

### Styling
- **Tailwind CSS 3.4** - Utility-first CSS
- **tailwindcss-animate** - Animation utilities
- **Framer Motion 12.34** - Animation library

### UI Components
- **Radix UI** - Headless accessible components
- **Lucide React** - Icon library
- **Sonner** - Toast notifications
- **shadcn/ui** - Component collection

### Form & Validation
- **React Hook Form 7.61** - Form management
- **Zod 3.25** - Schema validation

### Theme
- **next-themes 0.3** - Theme management

## 🎬 Animations

### Framer Motion Animations Used

#### 1. **Fade In (Y-axis)**
```tsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
```
Used in: Section headers, content blocks

#### 2. **Fade In (X-axis)**
```tsx
initial={{ opacity: 0, x: -20 }} // or x: 20
whileInView={{ opacity: 1, x: 0 }}
```
Used in: Side-by-side content, contact info

#### 3. **Scale Animation**
```tsx
initial={{ opacity: 0, scale: 0.9 }}
whileInView={{ opacity: 1, scale: 1 }}
transition={{ delay: i * 0.04 }}
```
Used in: Tech stack cards, service cards

#### 4. **Stagger Children**
```tsx
transition={{ delay: i * 0.15, duration: 0.5 }}
```
Used in: Pricing cards, feature lists

### Tailwind Animations

#### Custom Keyframes
- `fade-in` - Fade in with Y translation
- `fade-in-left` - Fade in with X translation
- `float` - Floating effect (up/down)
- `pulse-glow` - Pulsing glow shadow
- `accordion-down/up` - Accordion animations

## 📂 Project Structure

```
AppnixTech/
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── PricingSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── TechStackSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── WhyChooseUsSection.tsx
│   ├── pages/
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── hooks/
│   ├── lib/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

## 🛠️ Installation & Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm run test
```

## 🔧 Configuration

### Google Sheets Integration

Update the Google Apps Script URL in `ContactSection.tsx`:

```typescript
const url = `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec?...`;
```

### Theme Customization

Edit `tailwind.config.ts` and `src/index.css` to customize colors, fonts, and animations.

## 📱 Sections

1. **Hero** - Main landing section with CTA
2. **Services** - Service offerings with icons
3. **About** - Company information
4. **Why Choose Us** - Key differentiators
5. **Process** - Development workflow
6. **Tech Stack** - Technologies used
7. **Portfolio** - Project showcase
8. **Testimonials** - Client reviews
9. **Pricing** - Service packages
10. **FAQ** - Common questions
11. **Contact** - Contact form with Google Sheets integration
12. **Footer** - Links and social media

## 🎯 Key Components

### Glass Card Effect
```css
.glass-card {
  background: card/60%;
  backdrop-blur: xl;
  border: 1px solid border/50%;
  border-radius: 1rem;
}
```

### Gradient Text
```css
.gradient-text {
  background: linear-gradient(135deg, cyan, purple);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

Private - All rights reserved

## 👥 Contact

For inquiries, use the contact form on the website or reach out via email.
