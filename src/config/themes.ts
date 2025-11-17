/**
 * Theme Configuration
 * 
 * This file provides the main theme registry for the portfolio application.
 * It uses a modular architecture where themes are defined separately and then
 * assembled into the final theme registry.
 * 
 * To add a new theme:
 * 1. Create a new theme definition file in `./definitions/`
 * 2. Export it from `./definitions/index.ts`
 * 3. Add it to the `themeDefinitions` array
 * 4. The theme will automatically be available in the theme switcher
 * 
 * Architecture:
 * - `./types.ts` - Type definitions for themes and colors
 * - `./utils.ts` - Utility functions for creating themes and color palettes
 * - `./definitions/` - Individual theme definition files
 * - `./definitions/index.ts` - Central registry of all theme definitions
 */

// Export types for external use
export type { Theme, ThemeColors, ColorPalette, ThemeDefinition } from './types';

// Export utilities for external use
export { createTheme, createThemeRegistry, validateTheme } from './utils';

// Import theme definitions and utilities
import { themeDefinitions } from './definitions';
import { createThemeRegistry } from './utils';

// Create the main theme registry
export const themes = createThemeRegistry(themeDefinitions);

// Export convenience arrays and constants
export const themeIds = Object.keys(themes) as Array<keyof typeof themes>;
export const defaultThemeId = 'default' as const;

// Export individual theme definitions for direct access if needed
export { themeDefinitions };
