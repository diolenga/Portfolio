# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a portfolio website built with React, TypeScript, Vite, shadcn/ui, and Tailwind CSS. The project was originally created using Lovable (https://lovable.dev) and follows a single-page application architecture with section-based navigation.

## Development Commands

```bash
# Install dependencies (uses npm)
npm i

# Start development server (runs on http://[::]:8080)
npm run dev

# Build for production
npm run build

# Build for development mode
npm run build:dev

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Architecture

### Application Structure

The app follows a component-based architecture with a clear separation of concerns:

- **Entry Point**: `src/main.tsx` renders the root `App` component
- **App Shell**: `src/App.tsx` sets up global providers and routing:
  - `QueryClientProvider` for React Query
  - `TooltipProvider` for tooltips
  - `Toaster` components (shadcn toast + Sonner) for notifications
  - `BrowserRouter` for client-side routing
- **Main Route**: `/` renders the `Index` page which displays the `Portfolio` component
- **404 Route**: Catch-all `*` route renders `NotFound` component

### Component Organization

The portfolio is structured as a single-page layout with distinct sections:

- `Portfolio.tsx` - Main container that composes all sections
- `HeroSection.tsx` - Landing/hero area
- `AboutSection.tsx` - About information
- `ProjectsSection.tsx` - Projects showcase
- `CertificationsSection.tsx` - Certifications display
- `ContactSection.tsx` - Contact form (uses @emailjs/browser for email functionality)

**Important**: When adding new routes, they MUST be added ABOVE the catch-all `*` route in `src/App.tsx` (see comment on line 19).

### UI Components

All UI components are located in `src/components/ui/` and are based on shadcn/ui with Radix UI primitives. These components follow the shadcn architecture and should not be manually modified - use the shadcn CLI to add/update components.

### Styling System

- **Tailwind CSS**: Primary styling framework with custom configuration
- **CSS Variables**: Theme colors defined in `src/index.css` using HSL format
- **Custom Animations**: `fade-in`, `slide-up`, `glow` defined in tailwind.config.ts
- **Custom Gradients**: `gradient-hero` and `gradient-accent` available via CSS variables
- **Fonts**: Inter (sans) and Poppins (heading) configured in tailwind.config.ts
- **Dark Mode**: Supported via class-based strategy

### Path Aliases

The project uses TypeScript path aliases configured in both `tsconfig.json` and `vite.config.ts`:

```typescript
@/ -> ./src/
```

This allows imports like:
```typescript
import { Button } from "@/components/ui/button"
import { Portfolio } from "@/components/Portfolio"
```

### TypeScript Configuration

The project uses a relaxed TypeScript configuration:
- `noImplicitAny: false`
- `strictNullChecks: false`
- `noUnusedLocals: false`
- `noUnusedParameters: false`

This is intentional for rapid development, but consider tightening these settings for production applications.

### Development Server

Vite dev server is configured to:
- Listen on all interfaces (`::`) at port 8080
- Use SWC for fast React refresh
- Include `lovable-tagger` plugin in development mode for Lovable integration

### Linting

ESLint is configured with:
- TypeScript ESLint parser
- React Hooks rules (recommended)
- React Refresh plugin
- `@typescript-eslint/no-unused-vars` disabled to match relaxed TS config

## Key Dependencies

- **@emailjs/browser**: Email functionality for contact form
- **@tanstack/react-query**: Data fetching and state management
- **react-router-dom**: Client-side routing
- **next-themes**: Theme management (dark mode support)
- **lucide-react**: Icon library
- **react-hook-form + zod**: Form validation
- **recharts**: Charting library (if needed)
- **vaul**: Drawer component

## Working with shadcn/ui

The project uses shadcn/ui components configured in `components.json`:
- Style: default
- Base color: slate
- CSS variables enabled
- All components use `.tsx` extension

To add new shadcn components, use the shadcn CLI (not documented in package.json scripts, but available if shadcn-ui is installed globally).

## Lovable Integration

This project is managed through Lovable (https://lovable.dev/projects/b12cb039-bbcf-4c20-9e3a-4a22d11d25f2). Changes can be made via:
1. Lovable web interface (auto-commits to repo)
2. Local development (push changes to sync with Lovable)
3. GitHub web editor
4. GitHub Codespaces

The `lovable-tagger` plugin runs in development mode to support Lovable's visual editing capabilities.
