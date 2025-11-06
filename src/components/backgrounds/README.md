# Theme Background Components

This directory contains theme-specific background components that can include animations, effects, and custom styling.

## How It Works

1. **ThemeBackground.tsx** - The main wrapper component that renders the appropriate background based on the active theme
2. **Theme-specific backgrounds** - Individual background components for each theme (e.g., ShowgirlBackground.tsx)

## Current Implementations

### The Life of a Showgirl (tloas)
- **Component**: `ShowgirlBackground.tsx`
- **Features**: Animated sparkles with theme-specific colors
- **Light Mode**: Sage green background (#a8c9a3) with rust sparkles (#b85a3e)
- **Dark Mode**: Rustic brown background (#6b3326) with peachy sparkles (#edc9bf)

## Adding a New Theme Background

To add a custom background for a new theme:

1. **Create the background component:**
   ```tsx
   // src/components/backgrounds/YourThemeBackground.tsx
   "use client";

   import React from "react";

   interface YourThemeBackgroundProps {
     mode: "light" | "dark";
   }

   export const YourThemeBackground: React.FC<YourThemeBackgroundProps> = ({
     mode,
   }) => {
     const backgroundColor = mode === "light" ? "#yourLightColor" : "#yourDarkColor";
     
     return (
       <div
         className="fixed inset-0 -z-10"
         style={{ backgroundColor }}
       >
         {/* Add your custom effects, animations, particles, etc. */}
       </div>
     );
   };
   ```

2. **Register the background in ThemeBackground.tsx:**
   ```tsx
   import { YourThemeBackground } from "./YourThemeBackground";

   const backgroundComponents: Record<
     string,
     React.ComponentType<{ mode: "light" | "dark" }>
   > = {
     tloas: ShowgirlBackground,
     yourThemeId: YourThemeBackground, // Add this line
   };
   ```

3. **Export from index.ts:**
   ```tsx
   export { YourThemeBackground } from "./YourThemeBackground";
   ```

## Fallback Behavior

If a theme doesn't have a custom background component, `ThemeBackground` automatically falls back to a simple colored background using the theme's `background` color from the theme configuration.

## Tips

- Use `fixed inset-0 -z-10` to ensure the background stays behind all content
- Accept `mode` prop to handle light/dark mode variations
- Consider performance when adding animations (use CSS transforms/opacity when possible)
- Test with different screen sizes and devices
