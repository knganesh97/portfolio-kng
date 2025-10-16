# Portfolio Theme Guide

## 🎨 Overview

Your portfolio uses a **centralized theme system** inspired by "The Life of a Showgirl" aesthetic with warm burnt oranges and sage/olive greens. All colors are controlled through CSS variables, making theme changes simple and consistent.

## 📁 Theme Configuration Files

### 1. **`src/styles/globals.css`** - Primary Theme Control
This is your **main theme configuration file**. All colors are defined here using CSS variables.

### 2. **`tailwind.config.ts`** - Extended Color Palette
Provides additional utility classes for direct color access (e.g., `bg-custom-orange-500`).

---

## 🎯 How to Change the Theme

### **Method 1: Update CSS Variables (Recommended)**

Edit `src/styles/globals.css` to change the entire theme. Here's the structure:

```css
:root {
  /* Color Palettes */
  --orange-50 to --orange-950
  --green-50 to --green-950
  --emerald-50 to --emerald-950
  
  /* Semantic Variables (Light Mode) */
  --background: var(--orange-50);      /* Page background */
  --foreground: #2a1810;               /* Main text color */
  --card: var(--green-50);             /* Card backgrounds */
  --card-foreground: #2a1810;          /* Card text */
  --primary: var(--orange-500);        /* Primary actions/buttons */
  --primary-foreground: #ffffff;       /* Primary button text */
  --secondary: var(--green-400);       /* Secondary elements */
  --secondary-foreground: #ffffff;     /* Secondary text */
  --muted: var(--green-100);          /* Muted backgrounds */
  --muted-foreground: var(--green-700); /* Muted text */
  --accent: var(--emerald-400);        /* Accent elements */
  --accent-foreground: #ffffff;        /* Accent text */
  --border: var(--green-200);          /* Border color */
  --input: var(--green-100);           /* Input backgrounds */
  --ring: var(--orange-400);           /* Focus rings */
  
  /* Component-Specific */
  --header-bg: var(--orange-600);
  --header-border: var(--orange-700);
  --header-title: #ffffff;
  --header-link: var(--orange-50);
  --header-link-hover: #ffffff;
  --header-link-bg-hover: var(--orange-700);
  
  --footer-bg: var(--green-600);
  --footer-text: var(--orange-50);
  --footer-border: var(--green-700);
}

@media (prefers-color-scheme: dark) {
  :root {
    /* Dark mode overrides */
  }
}
```

### **Method 2: Add New Color Schemes**

To add a completely new color scheme:

1. **Update Color Variables** in `globals.css`:
   ```css
   :root {
     --blue-500: #3b82f6;
     --purple-500: #a855f7;
     /* ... add your colors ... */
   }
   ```

2. **Update Semantic Variables**:
   ```css
   --primary: var(--blue-500);
   --secondary: var(--purple-500);
   ```

3. **Optional**: Add to `tailwind.config.ts` for utility classes:
   ```typescript
   'custom-blue': {
     500: '#3b82f6',
   }
   ```

---

## 🏗️ Component Theme Usage

All components now use **semantic CSS variables** instead of hardcoded colors:

### ✅ Correct Usage (Theme-Aware)
```tsx
<div className="bg-background text-foreground">
<button className="bg-primary text-primary-foreground">
<p className="text-muted-foreground">
<Card className="bg-card text-card-foreground border-border">
```

### ❌ Wrong Usage (Hardcoded)
```tsx
<div className="bg-white text-black">        // DON'T DO THIS
<button className="bg-blue-500">             // DON'T DO THIS
<p className="text-gray-600">                // DON'T DO THIS
```

---

## 🎨 Available Theme Variables

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
- `bg-header-bg` - Header background
- `text-header-link` - Header link color
- `bg-footer-bg` - Footer background
- `text-destructive` - Error/delete actions

---

## 🌓 Dark Mode

Dark mode is automatically handled by the `@media (prefers-color-scheme: dark)` section in `globals.css`. All semantic variables are redefined for dark mode.

To test dark mode:
- macOS: System Preferences → General → Appearance → Dark
- Windows: Settings → Personalization → Colors → Dark

---

## 🎭 Current Color Scheme: "Life of a Showgirl"

### Palette Breakdown

**🍊 Warm Burnt Oranges** (Primary)
- Light: `#fef9f3` to `#f19654`
- Mid: `#e87636` to `#ad4623`
- Dark: `#8b3824` to `#3d160e`

**🌿 Sage/Olive Greens** (Secondary)
- Light: `#f5f7f1` to `#90a871`
- Mid: `#748c55` to `#475737`
- Dark: `#3a462f` to `#1a2116`

**💎 Warm Teal/Emerald** (Accents)
- Light: `#f0f8f5` to `#63aa94`
- Mid: `#498d78` to `#2f5b4f`
- Dark: `#294941` to `#12231f`

---

## 🚀 Quick Theme Change Example

Want to switch to a blue and pink theme?

### Step 1: Update `globals.css`
```css
:root {
  /* Replace orange variables */
  --primary-color-50: #eff6ff;
  --primary-color-500: #3b82f6;
  --primary-color-700: #1d4ed8;
  
  /* Replace green variables */
  --secondary-color-50: #fdf2f8;
  --secondary-color-500: #ec4899;
  --secondary-color-700: #be185d;
  
  /* Update semantic variables */
  --background: var(--primary-color-50);
  --primary: var(--primary-color-500);
  --secondary: var(--secondary-color-500);
  --header-bg: var(--primary-color-700);
  --footer-bg: var(--secondary-color-700);
}
```

### Step 2: Save the file
✨ That's it! All components will automatically use the new theme.

---

## 📋 Checklist for Custom Themes

- [ ] Update base color palettes (50-950 shades)
- [ ] Update semantic variables (--background, --primary, etc.)
- [ ] Update component-specific variables (--header-bg, --footer-bg)
- [ ] Update dark mode section
- [ ] Test all pages: Home, Projects, Project Detail
- [ ] Verify buttons, cards, and modals
- [ ] Check hover states and focus rings

---

## 🛠️ Troubleshooting

### Colors not updating?
1. Save `globals.css`
2. Restart dev server: `npm run dev`
3. Hard refresh browser: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)

### Component still shows old colors?
Check if the component is using:
- ✅ Theme variables: `text-foreground`
- ❌ Hardcoded colors: `text-gray-600`

If hardcoded, replace with appropriate theme variable.

---

## 📚 Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- Current theme inspired by: Taylor Swift's "The Life of a Showgirl"

---

**Happy Theming! 🎨✨**
