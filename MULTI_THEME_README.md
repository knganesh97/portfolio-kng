# Multi-Theme System - Quick Start

## Overview
Your portfolio now supports multiple themes with light and dark modes!

## Current Themes
1. **The Life of a Showgirl (tloas)** - Rustic nature with warm oranges and sage greens (default)
2. **Default** - Clean black and white minimalist theme

## For Users
Access the theme switcher in the header (top right on desktop, in the mobile menu on mobile devices). Select your preferred theme and toggle between light/dark mode.

## For Developers

### Adding a New Theme (Simple!)

1. Open `src/config/themes.ts`
2. Add your theme to the `themes` object:

```typescript
myTheme: {
  id: 'myTheme',
  name: 'My Theme Name',
  description: 'Brief description',
  light: {
    // Define light mode colors
    background: '#ffffff',
    foreground: '#000000',
    // ... all other required colors
  },
  dark: {
    // Define dark mode colors
    background: '#000000',
    foreground: '#ffffff',
    // ... all other required colors
  },
}
```

3. Save and reload - your theme will appear automatically!

### Required Colors
Each theme mode (light/dark) must define:
- Color palettes: `orange`, `green`, `blue` (50-950 shades each)
- Semantic colors: `background`, `foreground`, `card`, `primary`, `secondary`, etc.
- Component colors: `headerBg`, `footerBg`, `cardContainerBg`, etc.

See `src/config/themes.ts` for the complete TypeScript interface.

### Architecture
- **`src/config/themes.ts`** - All theme definitions
- **`src/components/ThemeProvider.tsx`** - Theme state management
- **`src/components/ThemeSwitcher.tsx`** - UI for theme selection
- **`src/styles/globals.css`** - Base styles and fallbacks
- **`tailwind.config.ts`** - Tailwind integration

## Documentation
See `THEME_GUIDE.md` for comprehensive documentation including:
- Detailed color structure
- Best practices for creating themes
- Tips for color palette generation
- Troubleshooting guide
- Technical implementation details

## Features
✅ Multiple themes with one-click switching
✅ Light and dark mode for each theme
✅ System preference detection
✅ LocalStorage persistence
✅ No flash of unstyled content (FOUC)
✅ Type-safe theme definitions
✅ Easy to add new themes
✅ Responsive theme switcher UI

## Quick Commands
```bash
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run start
```

---

**Note:** The theme system is fully integrated and ready to use. Users can switch themes immediately, and developers can add new themes by editing just one file!
