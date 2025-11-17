# Portfolio KNG

A modern, customizable portfolio website built with Next.js, featuring a powerful theme system and responsive design.

## Features

- 🎨 **Modular Theme System** - Easily create and switch between custom themes
- 🌓 **Dark/Light Mode** - Full support for both color schemes
- 📱 **Responsive Design** - Optimized for all device sizes
- ⚡ **Next.js 15** - Built with the latest Next.js features
- ⚛️ **React 19** - Latest React version with modern features
- 🎯 **TypeScript** - Full type safety throughout
- 💄 **Tailwind CSS** - Utility-first CSS framework

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/knganesh97/portfolio-kng.git
cd portfolio-kng
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Project Structure

```
src/
├── app/                  # Next.js app directory
├── components/           # React components
│   ├── backgrounds/     # Theme-specific background components
│   ├── icons/           # Custom SVG icon components
│   └── ui/              # Reusable UI components
├── config/              # Theme configuration system
│   ├── themes.ts        # Main theme registry
│   ├── types.ts         # TypeScript definitions
│   ├── utils.ts         # Theme utility functions
│   └── definitions/     # Individual theme files
├── styles/              # Global styles and constants
└── utils/               # General utility functions and constants
```

## Theme Configuration System

This portfolio features a powerful, modular theme system that allows you to easily create and manage custom color schemes.

### Architecture Overview

```
src/config/
├── themes.ts              # Main entry point and theme registry
├── types.ts              # TypeScript type definitions
├── utils.ts              # Utility functions for creating themes
└── definitions/          # Individual theme definitions
    ├── index.ts          # Central registry of theme definitions
    ├── default.ts        # Default theme (black/white)
    ├── trafalgarlaw.ts   # Trafalgar Law theme (yellow/black)
    └── tloas.ts          # The Life of a Showgirl theme (rustic)
```

### Adding a New Theme

#### 1. Create Theme Definition File

Create a new file in `src/config/definitions/your-theme-name.ts`:

```typescript
import type { ThemeDefinition } from '../types';
import { createGrayscalePalette } from '../utils';

export const yourTheme: ThemeDefinition = {
  id: 'your-theme-id',
  name: 'Your Theme Name',
  description: 'Description of your theme',
  
  colorPalettes: {
    orange: createGrayscalePalette(),
    green: createGrayscalePalette(),
    blue: createGrayscalePalette(),
  },
  
  lightMode: {
    background: '#ffffff',
    foreground: '#000000',
    // ... other semantic colors
  },
  
  darkMode: {
    background: '#000000',
    foreground: '#ffffff',
    // ... other semantic colors
  },
};
```

#### 2. Register the Theme

Add your theme to `src/config/definitions/index.ts`:

```typescript
export { yourTheme } from './your-theme-name';
import { yourTheme } from './your-theme-name';

export const themeDefinitions = [
  defaultTheme,
  trafalgarLawTheme,
  tloasTheme,
  yourTheme, // Add here
];
```

#### 3. Theme is Now Available

Your theme will automatically appear in the theme switcher component!

### Available Utility Functions

#### Color Palette Generators

- `createGrayscalePalette()` - Creates a black to white color palette
- `createYellowPalette()` - Creates a yellow/gold color palette
- `createRustPalette()` - Creates a rust/terracotta color palette
- `createSagePalette()` - Creates a sage green color palette
- `createBluePalette()` - Creates a blue color palette

#### Theme Management

- `createTheme(definition)` - Converts a ThemeDefinition to a Theme
- `createThemeRegistry(definitions)` - Creates a registry from an array of definitions
- `validateTheme(theme)` - Validates that a theme has all required properties

### Creating Custom Color Palettes

You can create custom color palettes by defining an object with shades 50-950:

```typescript
const customPalette: ColorPalette = {
  50: '#your-lightest-shade',
  100: '#your-light-shade',
  200: '#your-lighter-shade',
  // ... continue through 950
  950: '#your-almost-black-shade',
};
```

### Theme Structure

#### Color Palettes
Each theme has three main color palettes:
- `orange` - Primary accent colors
- `green` - Secondary accent colors  
- `blue` - Tertiary accent colors

#### Semantic Colors
Standard semantic color tokens for UI elements:
- `background`, `foreground` - Base page colors
- `card`, `cardForeground` - Card component colors
- `primary`, `primaryForeground` - Primary action colors
- `secondary`, `secondaryForeground` - Secondary action colors
- `muted`, `mutedForeground` - Subdued content colors
- `accent`, `accentForeground` - Accent/highlight colors
- `destructive`, `destructiveForeground` - Error/warning colors
- `border`, `input`, `ring` - Form and border colors

#### Component-Specific Colors
Colors for specific UI components:
- `header*` - Header/navigation colors
- `footer*` - Footer colors
- `cardContainer*` - Card container colors
- `shimmerGradient` - Loading animation gradient

### Best Practices

1. **Consistency** - Use utility functions for consistent color palettes
2. **Accessibility** - Ensure sufficient contrast between foreground and background colors
3. **Naming** - Use descriptive theme IDs and names
4. **Documentation** - Add clear descriptions for your themes
5. **Testing** - Test both light and dark modes thoroughly
6. **Semantic First** - Define semantic colors first, then component-specific overrides

## Theme Background Components

The portfolio features theme-specific background components that can include animations, effects, and custom styling to enhance the visual experience of each theme.

### How It Works

1. **ThemeBackground.tsx** - The main wrapper component that renders the appropriate background based on the active theme
2. **Theme-specific backgrounds** - Individual background components for each theme (e.g., ShowgirlBackground.tsx)

### Current Implementations

#### The Life of a Showgirl (tloas)
- **Component**: `ShowgirlBackground.tsx`
- **Features**: Uses theme-based background colors with animated sparkles overlay
- **Background**: Uses CSS variables for theme-aware background colors
- **Animation**: Sparkles are added via the `Sparkles` component wrapper in `ThemeBackground.tsx`

### Adding a New Theme Background

To add a custom background for a new theme:

#### 1. Create the background component:
```tsx
// src/components/backgrounds/YourThemeBackground.tsx
"use client";

import React from "react";

export const YourThemeBackground: React.FC = () => {
  return (
    <div
      className="fixed inset-0 -z-10 w-full h-full bg-background"
      style={{ transition: "background-color 0.3s ease" }}
    >
      {/* Add your custom effects, animations, particles, etc. */}
    </div>
  );
};
```

#### 2. Register the background in ThemeBackground.tsx:
```tsx
import { YourThemeBackground } from "./YourThemeBackground";

// Add a new conditional block for your theme
if (themeId === "yourThemeId") {
  return (
    <>
      <YourThemeBackground />
      {children}
    </>
  );
}
```

#### 3. Export from index.ts:
```tsx
export { YourThemeBackground } from "./YourThemeBackground";
```

### Fallback Behavior

If a theme doesn't have a custom background component, `ThemeBackground` automatically falls back to a simple colored background using the theme's `background` color from the theme configuration.

### Background Development Tips

- Use `fixed inset-0 -z-10 w-full h-full` to ensure the background stays behind all content
- Use `bg-background` class to automatically handle light/dark mode via CSS variables
- Consider performance when adding animations (use CSS transforms/opacity when possible)
- Test with different screen sizes and devices
- Follow the pattern from existing backgrounds (`ShowgirlBackground.tsx`, `TrafalgarLawBackground.tsx`)

## Customization

### Updating Content

Edit the following files to customize your portfolio content:
- `src/utils/Constants.tsx` - Personal information, work experience, skills, projects, navigation items
- `src/components/` - Individual component customizations
  - `ProfileHeader.tsx` - Main header and introduction
  - `Projects.tsx` & `ProjectCard.tsx` - Project showcase
  - `Roles.tsx` & `RoleCard.tsx` - Work experience section
  - `Skills.tsx` & `SkillCard.tsx` - Skills and technologies
  - `Education.tsx` & `Achievements.tsx` - Educational background and accomplishments
- `public/` - Static assets like images and resume

### Styling

The project uses Tailwind CSS with CSS variables for theming. Global styles are defined in:
- `src/styles/globals.css` - Base styles and CSS variables
- `src/styles/styleConstants.tsx` - Shared style constants

## Technologies Used

- **Framework**: Next.js 15 with App Router
- **Frontend**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: Custom component library
- **Icons**: Custom SVG components + Lucide React
- **Content**: React Markdown for rich text
- **Fonts**: Geist font family

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new):

1. Connect your GitHub repository
2. Vercel will automatically detect the Next.js configuration
3. Deploy with zero configuration needed

### Other Platforms

This is a standard Next.js application and can be deployed on any platform that supports Node.js:

- **Netlify**: Add `npm run build` as build command and `out/` as publish directory
- **Railway**: Connect repository and deploy
- **Digital Ocean**: Use their App Platform
- **AWS**: Use Amplify or deploy to EC2

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/docs/) - JavaScript with type syntax
