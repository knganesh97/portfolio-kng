# Portfolio Multi-Theme System Guide

## 🎨 Overview

Your portfolio now features a **multi-theme system** that allows users to switch between different color schemes, each with light and dark modes. The system currently includes:

1. **"The Life of a Showgirl" (tloas)** - Rustic nature aesthetic with warm rust/terracotta oranges, sage greens, and blue accents
2. **"Default"** - Clean, minimalist black and white theme

The theme system is designed to be easily extensible, allowing you to add as many themes as you want in the future.

## 📁 Theme System Architecture

### 1. **`src/config/themes.ts`** - Theme Definitions
This is the **central configuration file** where all themes are defined. Each theme contains:
- A unique ID
- Display name and description
- Light mode colors
- Dark mode colors

### 2. **`src/components/ThemeProvider.tsx`** - Theme Management
A React Context provider that:
- Manages the current theme and mode (light/dark)
- Applies theme colors as CSS variables dynamically
- Persists user preferences to localStorage
- Handles system preference detection

### 3. **`src/components/ThemeSwitcher.tsx`** - User Interface
A dropdown component that allows users to:
- Select from available themes
- Toggle between light and dark modes
- See theme descriptions

### 4. **`src/styles/globals.css`** - Base Styles
Contains fallback CSS variables for SSR and defines component styles that use the CSS variables.

### 5. **`tailwind.config.ts`** - Tailwind Integration
Maps CSS variables to Tailwind utility classes for seamless integration.

---

## 🚀 How to Add a New Theme

Adding a new theme is simple and requires editing only one file:

### Step 1: Open `src/config/themes.ts`

### Step 2: Add Your Theme to the `themes` Object

```typescript
export const themes: Record<string, Theme> = {
  // Existing themes...
  tloas: { /* ... */ },
  default: { /* ... */ },
  
  // Add your new theme here
  myNewTheme: {
    id: 'myNewTheme',
    name: 'My New Theme',
    description: 'A brief description of your theme',
    light: {
      // Define all light mode colors
      orange: { /* 50-950 shades */ },
      green: { /* 50-950 shades */ },
      blue: { /* 50-950 shades */ },
      background: '#ffffff',
      foreground: '#000000',
      // ... all other semantic colors
      // ... all component-specific colors
    },
    dark: {
      // Define all dark mode colors
      // Same structure as light mode
    },
  },
};
```

### Step 3: That's It!

Your new theme will automatically:
- Appear in the theme switcher dropdown
- Work with light and dark modes
- Persist user preferences
- Apply to all components

---

## 🎨 Required Theme Colors

Each theme must define these color properties for both `light` and `dark` modes:

### Color Palettes (3 palettes with 11 shades each)
```typescript
orange: { 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950 }
green: { 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950 }
blue: { 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950 }
```

### Semantic Colors
These define the meaning/purpose of colors in your app:
```typescript
background          // Page background
foreground          // Main text color
card                // Card backgrounds
cardForeground      // Card text
popover             // Popover backgrounds
popoverForeground   // Popover text
primary             // Primary actions/buttons
primaryForeground   // Primary button text
secondary           // Secondary elements
secondaryForeground // Secondary text
muted               // Muted backgrounds
mutedForeground     // Muted text
accent              // Accent elements
accentForeground    // Accent text
destructive         // Error/danger states
destructiveForeground // Error text
border              // Border color
input               // Input backgrounds
ring                // Focus rings
```

### Component-Specific Colors
```typescript
headerBg            // Header background
headerBgRgb         // Header background RGB (for transparency)
headerBorder        // Header border
headerTitle         // Header title text
headerLink          // Header link color
headerLinkHover     // Header link hover
headerLinkBgHover   // Header link hover background

footerBg            // Footer background
footerText          // Footer text
footerBorder        // Footer border

cardContainerBg     // Card container background
cardContainerForeground // Card container text
cardContainerBorder // Card container border

shimmerGradient     // Shimmer effect gradient
```

---

## 💡 Tips for Creating Themes

### Color Palette Generation
Use these tools to generate cohesive color palettes:
- [Coolors.co](https://coolors.co/) - Color palette generator
- [Adobe Color](https://color.adobe.com/) - Color wheel and harmony rules
- [Tailwind Shades](https://www.tints.dev/) - Generate 50-950 shades from a base color

### Ensuring Good Contrast
- Light mode: Use darker colors for text, lighter for backgrounds
- Dark mode: Use lighter colors for text, darker for backgrounds
- Test contrast ratios at [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Aim for at least 4.5:1 for normal text, 3:1 for large text

### Consistency
- Keep similar brightness levels across light/dark modes
- Maintain consistent spacing in your color scales (50-950)
- Use the same accent colors across both modes when possible
- Test your theme with actual content to ensure readability

---

## 🏗️ Component Theme Usage

All components use **semantic CSS variables** via Tailwind classes:

### ✅ Correct Usage (Theme-Aware)
```tsx
<div className="bg-background text-foreground">
<button className="bg-primary text-primary-foreground">
<p className="text-muted-foreground">
<Card className="bg-card text-card-foreground border-border">
```

### ❌ Avoid Hardcoded Colors
```tsx
<div className="bg-white text-black">        // Won't change with theme
<button className="bg-blue-500">             // Won't change with theme
<p className="text-gray-600">                // Won't change with theme
```

---

## 🎨 Available Tailwind Classes

### Layout & Typography
- `bg-background` - Page background
- `text-foreground` - Main text color
- `text-muted-foreground` - Secondary/subtle text

### Cards & Containers
- `bg-card` - Card backgrounds
- `text-card-foreground` - Card text
- `border-border` - All borders

### Actions & Interactions
- `bg-primary` / `text-primary-foreground` - Primary buttons
- `bg-secondary` / `text-secondary-foreground` - Secondary buttons
- `bg-accent` / `text-accent-foreground` - Accent elements
- `hover:bg-primary/80` - Hover states (80% opacity)

### Forms & Inputs
- `bg-input` - Input backgrounds
- `border-input` - Input borders
- `ring-ring` - Focus rings

### Specialized
- `header-bg` - Header background
- `header-title` - Header title color
- `header-link` - Header link color
- `header-link-bg-hover` - Header link hover background
- `footer-bg` - Footer background
- `footer-text` - Footer text color
- `card-container-bg` - Card container background
- `card-container-foreground` - Card container text
- `text-destructive` - Error/delete actions

---

## 🌓 Light & Dark Mode

The theme system automatically handles light and dark modes:

- **User Selection**: Users can toggle between light and dark mode via the theme switcher
- **System Preference**: On first visit, the app respects the user's system preference
- **Persistence**: User's theme and mode preferences are saved to localStorage
- **Per-Theme**: Each theme has its own light and dark color definitions

### How It Works
1. The `ThemeProvider` detects system preference on first load
2. User selections override the system preference
3. The `.dark` class is added/removed from `<html>` element
4. CSS variables are updated dynamically based on the active mode

---

## 🎭 Available Themes

### 1. The Life of a Showgirl (tloas)
**Rustic nature aesthetic** - Default theme

**Light Mode:**
- Background: Sage green (#a8c9a3)
- Cards: Rust orange (#b85a3e)
- Accents: Purple-blue (#5b6fd4)

**Dark Mode:**
- Background: Dark rust (#6b3326)
- Cards: Sage green (#9dbf96)
- Accents: Purple-blue (#5b6fd4)

### 2. Default
**Clean, minimalist black and white**

**Light Mode:**
- Background: White (#ffffff)
- Cards: Light gray (#f5f5f5)
- Accents: Black (#000000)

**Dark Mode:**
- Background: Black (#000000)
- Cards: Dark gray (#171717)
- Accents: White (#ffffff)

---

## 🚀 Example: Creating a "Ocean Breeze" Theme

Let's create a blue and teal theme as an example:

### Step 1: Open `src/config/themes.ts`

### Step 2: Add the new theme
```typescript
oceanBreeze: {
  id: 'oceanBreeze',
  name: 'Ocean Breeze',
  description: 'Cool blues and teals inspired by the ocean',
  light: {
    orange: { /* Use blue shades */ 
      50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe',
      300: '#93c5fd', 400: '#60a5fa', 500: '#3b82f6',
      600: '#2563eb', 700: '#1d4ed8', 800: '#1e40af',
      900: '#1e3a8a', 950: '#172554',
    },
    green: { /* Use teal shades */
      50: '#f0fdfa', 100: '#ccfbf1', 200: '#99f6e4',
      300: '#5eead4', 400: '#2dd4bf', 500: '#14b8a6',
      600: '#0d9488', 700: '#0f766e', 800: '#115e59',
      900: '#134e4a', 950: '#042f2e',
    },
    blue: { /* Keep as accent or use cyan */
      50: '#ecfeff', 100: '#cffafe', 200: '#a5f3fc',
      300: '#67e8f9', 400: '#22d3ee', 500: '#06b6d4',
      600: '#0891b2', 700: '#0e7490', 800: '#155e75',
      900: '#164e63', 950: '#083344',
    },
    background: '#eff6ff',
    foreground: '#0c4a6e',
    card: '#0891b2',
    cardForeground: '#ffffff',
    primary: '#3b82f6',
    primaryForeground: '#ffffff',
    secondary: '#14b8a6',
    secondaryForeground: '#ffffff',
    // ... define all other required colors
  },
  dark: {
    // Define dark mode colors
    // ...
  },
},
```

### Step 3: Save and reload
The new "Ocean Breeze" theme will appear in the theme switcher automatically!

---

## 📋 Testing Your Theme

After creating a new theme:

1. **Switch to the theme** using the theme switcher in the header
2. **Toggle light/dark mode** to ensure both work correctly
3. **Navigate through pages**: Home, Projects, Project details
4. **Check all components**:
   - [ ] Header and navigation
   - [ ] Buttons (primary, secondary)
   - [ ] Cards and containers
   - [ ] Footer
   - [ ] Form inputs (if any)
   - [ ] Hover and focus states
5. **Verify contrast**: Ensure text is readable on all backgrounds
6. **Test on mobile**: Check theme switcher in mobile sidebar

---

## 🛠️ Troubleshooting

### Theme not appearing in switcher?
- Make sure the theme is properly exported in `src/config/themes.ts`
- Check that all required color properties are defined
- Restart the dev server

### Colors not updating?
1. Clear browser cache and localStorage
2. Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
3. Check browser console for errors

### Theme loads but colors look wrong?
- Verify all CSS variable names match the expected format
- Check that RGB values for headers are in format "R, G, B" (no rgba)
- Ensure gradients are valid CSS gradient strings

### Component not using theme colors?
Check if the component is using:
- ✅ Theme variables: `text-foreground`, `bg-primary`
- ❌ Hardcoded colors: `text-gray-600`, `bg-blue-500`

If hardcoded, replace with appropriate theme variable from the list above.

---

## 🎓 Technical Details

### How the Theme System Works

1. **Theme Configuration** (`src/config/themes.ts`)
   - Defines all available themes with their colors
   - Each theme has separate light and dark mode colors

2. **Theme Provider** (`src/components/ThemeProvider.tsx`)
   - React Context that manages theme state
   - Loads saved preferences from localStorage
   - Detects system preference on first visit
   - Applies theme by setting CSS variables on `<html>` element
   - Updates when theme or mode changes

3. **Theme Switcher** (`src/components/ThemeSwitcher.tsx`)
   - UI component for theme selection
   - Dropdown with theme list and mode toggle
   - Saves preferences on change

4. **CSS Variables** (`src/styles/globals.css`)
   - Defines fallback values for SSR
   - All styles use CSS variables via Tailwind classes
   - No hardcoded colors in components

5. **Tailwind Integration** (`tailwind.config.ts`)
   - Maps CSS variables to Tailwind utility classes
   - Enables use of `bg-primary`, `text-foreground`, etc.

---

## 📚 Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [React Context API](https://react.dev/reference/react/useContext)
- [Color Palette Generators](https://coolors.co/)

---

**Happy Theming! 🎨✨**
