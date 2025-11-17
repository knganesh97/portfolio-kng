/**
 * Theme Utilities
 * 
 * Helper functions for creating and managing themes.
 */

import type { Theme, ThemeDefinition, ThemeColors, ColorPalette } from './types';

/**
 * Creates a complete theme object from a theme definition
 */
export function createTheme(definition: ThemeDefinition): Theme {
  const { id, name, description, colorPalettes, lightMode, darkMode } = definition;
  
  return {
    id,
    name,
    description,
    light: {
      ...colorPalettes,
      ...lightMode,
    },
    dark: {
      ...colorPalettes,
      ...darkMode,
    },
  };
}

/**
 * Creates a grayscale color palette
 */
export function createGrayscalePalette(): ColorPalette {
  return {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a',
  };
}

/**
 * Creates a yellow/gold color palette for the Trafalgar Law theme
 */
export function createYellowPalette(): ColorPalette {
  return {
    50: '#fffef0',
    100: '#fffcd6',
    200: '#fff9ad',
    300: '#fff380',
    400: '#ffea52',
    500: '#ffd700',
    600: '#e6c200',
    700: '#c7a500',
    800: '#a88700',
    900: '#6b5600',
    950: '#3d3100',
  };
}

/**
 * Creates a rust/terracotta color palette
 */
export function createRustPalette(): ColorPalette {
  return {
    50: '#f7e8e4',
    100: '#edc9bf',
    200: '#e2a899',
    300: '#d68773',
    400: '#c76e56',
    500: '#b85a3e',
    600: '#a54d35',
    700: '#8f3f2b',
    800: '#793222',
    900: '#5c2418',
    950: '#2a1c18',
  };
}

/**
 * Creates a sage green color palette
 */
export function createSagePalette(): ColorPalette {
  return {
    50: '#f1f7f0',
    100: '#e3f0e1',
    200: '#c5e2c1',
    300: '#b3d6ae',
    400: '#9dbf96',
    500: '#a8c9a3',
    600: '#7fa878',
    700: '#638b5c',
    800: '#4d6e48',
    900: '#3a5437',
    950: '#1f2b1e',
  };
}

/**
 * Creates a blue color palette
 */
export function createBluePalette(): ColorPalette {
  return {
    50: '#eef0fb',
    100: '#d9ddf5',
    200: '#b8c0ed',
    300: '#929ee3',
    400: '#7082db',
    500: '#5b6fd4',
    600: '#4c5db8',
    700: '#3e4a95',
    800: '#333d78',
    900: '#2c3564',
    950: '#1c213d',
  };
}

/**
 * Validates a theme definition to ensure all required properties are present
 */
export function validateTheme(theme: Theme): boolean {
  const requiredProps = ['id', 'name', 'description', 'light', 'dark'];
  return requiredProps.every(prop => prop in theme && theme[prop as keyof Theme] !== undefined);
}

/**
 * Creates a registry of themes from an array of theme definitions
 */
export function createThemeRegistry(definitions: ThemeDefinition[]): Record<string, Theme> {
  return definitions.reduce((registry, definition) => {
    const theme = createTheme(definition);
    if (validateTheme(theme)) {
      registry[theme.id] = theme;
    } else {
      console.warn(`Invalid theme definition: ${definition.id}`);
    }
    return registry;
  }, {} as Record<string, Theme>);
}