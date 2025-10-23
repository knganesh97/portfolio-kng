# Portfolio Theme Guide

## 🎨 Overview

Your portfolio uses a **centralized theme system** with a **"Rustic Nature"** aesthetic featuring warm rust/terracotta oranges, sage greens, and blue accents. All colors are controlled through CSS variables with the `--color-` prefix, making theme changes simple and consistent.

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
  --color-orange-50 to --color-orange-950   /* Rust/Terracotta tones */
  --color-green-50 to --color-green-950     /* Sage/Mint green tones */
  --color-blue-50 to --color-blue-950       /* Blue/Purple accent tones */
  
  /* Semantic Variables (Light Mode) */
  --color-background: #a8c9a3;              /* Page background (sage green) */
  --color-foreground: #000000;              /* Main text color */
  --color-card: #b85a3e;                    /* Card backgrounds (rust) */
  --color-card-foreground: #ffffff;         /* Card text */
  --color-primary: #b85a3e;                 /* Primary actions/buttons (rust) */
  --color-primary-foreground: #ffffff;      /* Primary button text */
  --color-secondary: #9dbf96;               /* Secondary elements (sage) */
  --color-secondary-foreground: #000000;    /* Secondary text */
  --color-muted: #cbd7c7;                   /* Muted backgrounds */
  --color-muted-foreground: #3a5437;        /* Muted text */
  --color-accent: #5b6fd4;                  /* Accent elements (blue) */
  --color-accent-foreground: #ffffff;       /* Accent text */
  --color-border: #a8947f;                  /* Border color */
  --color-input: #b3d6ae;                   /* Input backgrounds */
  --color-ring: #5b6fd4;                    /* Focus rings (blue) */
  
  /* Component-Specific */
  --color-header-bg: #b85a3e;               /* Header background (rust) */
  --color-header-border: #8f3f2b;           /* Header border */
  --color-header-title: #ffffff;            /* Header title text */
  --color-header-link: #ffffff;             /* Header link color */
  --color-header-link-hover: #ffffff;       /* Header link hover */
  --color-header-link-bg-hover: #a54d35;    /* Header link hover background */
  
  --color-footer-bg: #9dbf96;               /* Footer background (sage) */
  --color-footer-text: #000000;             /* Footer text */
  --color-footer-border: #638b5c;           /* Footer border */
  
  --color-card-container-bg: #9dbf96;       /* Card container background */
  --color-card-container-foreground: #000000; /* Card container text */
  --color-card-container-border: #88af82;   /* Card container border */
  
  /* Shimmer Effect */
  --shimmer-gradient: linear-gradient(90deg, #b85a3e 0%, #c5e2c1 20%, #9dbf96 40%, #5b6fd4 60%, #9dbf96 80%, #c5e2c1 100%);
}

.dark {
  /* Dark mode overrides */
  --color-background: #6b3326;              /* Dark rust background */
  --color-foreground: #ffffff;              /* White text */
  --color-card: #9dbf96;                    /* Sage green cards */
  --color-card-foreground: #000000;         /* Dark text on cards */
  --color-primary: #9dbf96;                 /* Sage green primary */
  --color-secondary: #2f2420;               /* Dark brown secondary */
  --color-header-bg: #6b3326;               /* Dark rust header */
  --color-footer-bg: #2f2420;               /* Dark brown footer */
  --color-card-container-bg: #2f2420;       /* Dark container background */
}
```

### **Method 2: Add New Color Schemes**

To add a completely new color scheme:

1. **Update Color Variables** in `globals.css`:
   ```css
   :root {
     --color-blue-500: #3b82f6;
     --color-purple-500: #a855f7;
     /* ... add your colors ... */
   }
   ```

2. **Update Semantic Variables**:
   ```css
   --color-primary: var(--color-blue-500);
   --color-secondary: var(--color-purple-500);
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

## 🌓 Dark Mode

Dark mode is automatically handled by both the `.dark` class and the `@media (prefers-color-scheme: dark)` sections in `globals.css`. All semantic variables are redefined for dark mode, with the background switching to a dark rust color (#6b3326) and cards becoming sage green for contrast.

To test dark mode:
- macOS: System Preferences → General → Appearance → Dark
- Windows: Settings → Personalization → Colors → Dark
- Or manually add the `dark` class to the `<html>` element

---

## 🎭 Current Color Scheme: "Rustic Nature"

### Palette Breakdown

**🍊 Rust/Terracotta Oranges** (Primary)
- Light: `#f7e8e4` to `#c76e56`
- Mid: `#b85a3e` to `#8f3f2b`
- Dark: `#793222` to `#2a1c18`

**🌿 Sage/Mint Greens** (Secondary)
- Light: `#f1f7f0` to `#9dbf96`
- Mid: `#a8c9a3` to `#638b5c`
- Dark: `#4d6e48` to `#1f2b1e`

**� Blue/Purple Accents** (Accent)
- Light: `#eef0fb` to `#7082db`
- Mid: `#5b6fd4` to `#3e4a95`
- Dark: `#333d78` to `#1c213d`

---

## 🚀 Quick Theme Change Example

Want to switch to a blue and pink theme?

### Step 1: Update `globals.css`
```css
:root {
  /* Replace orange variables */
  --color-primary-50: #eff6ff;
  --color-primary-500: #3b82f6;
  --color-primary-700: #1d4ed8;
  
  /* Replace green variables */
  --color-secondary-50: #fdf2f8;
  --color-secondary-500: #ec4899;
  --color-secondary-700: #be185d;
  
  /* Update semantic variables */
  --color-background: var(--color-primary-50);
  --color-primary: var(--color-primary-500);
  --color-secondary: var(--color-secondary-500);
  --color-header-bg: var(--color-primary-700);
  --color-footer-bg: var(--color-secondary-700);
}
```

### Step 2: Save the file
✨ That's it! All components will automatically use the new theme.

---

## 📋 Checklist for Custom Themes

- [ ] Update base color palettes (50-950 shades)
- [ ] Update semantic variables (--color-background, --color-primary, etc.)
- [ ] Update component-specific variables (--color-header-bg, --color-footer-bg)
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
- Current theme inspired by: Rustic Nature aesthetic with warm earth tones

---

**Happy Theming! 🎨✨**
