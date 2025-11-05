/**
 * Theme Configuration
 * 
 * This file defines all available themes for the portfolio.
 * Each theme contains light and dark mode color definitions.
 * 
 * To add a new theme:
 * 1. Add a new key to the `themes` object
 * 2. Define light and dark mode color values
 * 3. The theme will automatically become available in the theme switcher
 */

export interface ThemeColors {
  // Base color palettes (shades 50-950)
  orange: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
  };
  green: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
  };
  blue: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
  };
  
  // Semantic colors
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  border: string;
  input: string;
  ring: string;
  
  // Component-specific colors
  headerBg: string;
  headerBgRgb: string;
  headerBorder: string;
  headerTitle: string;
  headerLink: string;
  headerLinkHover: string;
  headerLinkBgHover: string;
  
  footerBg: string;
  footerText: string;
  footerBorder: string;
  
  cardContainerBg: string;
  cardContainerForeground: string;
  cardContainerBorder: string;
  
  shimmerGradient: string;
}

export interface Theme {
  id: string;
  name: string;
  description: string;
  light: ThemeColors;
  dark: ThemeColors;
}

export const themes: Record<string, Theme> = {
  tloas: {
    id: 'tloas',
    name: 'The Life of a Showgirl',
    description: 'Rustic nature aesthetic with warm rust/terracotta oranges, sage greens, and blue accents',
    light: {
      // Color palettes
      orange: {
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
      },
      green: {
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
      },
      blue: {
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
      },
      
      // Semantic colors
      background: '#a8c9a3',
      foreground: '#000000',
      card: '#b85a3e',
      cardForeground: '#ffffff',
      popover: '#b85a3e',
      popoverForeground: '#ffffff',
      primary: '#b85a3e',
      primaryForeground: '#ffffff',
      secondary: '#9dbf96',
      secondaryForeground: '#000000',
      muted: '#cbd7c7',
      mutedForeground: '#3a5437',
      accent: '#5b6fd4',
      accentForeground: '#ffffff',
      destructive: '#b85a3e',
      destructiveForeground: '#ffffff',
      border: '#a8947f',
      input: '#b3d6ae',
      ring: '#5b6fd4',
      
      // Component-specific
      headerBg: '#b85a3e',
      headerBgRgb: '184, 90, 62',
      headerBorder: '#8f3f2b',
      headerTitle: '#ffffff',
      headerLink: '#ffffff',
      headerLinkHover: '#ffffff',
      headerLinkBgHover: '#a54d35',
      
      footerBg: '#9dbf96',
      footerText: '#000000',
      footerBorder: '#638b5c',
      
      cardContainerBg: '#9dbf96',
      cardContainerForeground: '#000000',
      cardContainerBorder: '#88af82',
      
      shimmerGradient: 'linear-gradient(90deg, #b85a3e 0%, #c5e2c1 20%, #9dbf96 40%, #5b6fd4 60%, #9dbf96 80%, #c5e2c1 100%)',
    },
    dark: {
      // Color palettes (same as light)
      orange: {
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
      },
      green: {
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
      },
      blue: {
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
      },
      
      // Semantic colors
      background: '#6b3326',
      foreground: '#ffffff',
      card: '#9dbf96',
      cardForeground: '#000000',
      popover: '#9dbf96',
      popoverForeground: '#000000',
      primary: '#9dbf96',
      primaryForeground: '#000000',
      secondary: '#2f2420',
      secondaryForeground: '#ffffff',
      muted: '#3a3d47',
      mutedForeground: '#ffffff',
      accent: '#5b6fd4',
      accentForeground: '#ffffff',
      destructive: '#b85a3e',
      destructiveForeground: '#ffffff',
      border: '#8c6b5f',
      input: '#3a2b26',
      ring: '#5b6fd4',
      
      // Component-specific
      headerBg: '#6b3326',
      headerBgRgb: '107, 51, 38',
      headerBorder: '#4d3832',
      headerTitle: '#ffffff',
      headerLink: '#ffffff',
      headerLinkHover: '#ffffff',
      headerLinkBgHover: '#5c2418',
      
      footerBg: '#2f2420',
      footerText: '#ffffff',
      footerBorder: '#1f1816',
      
      cardContainerBg: '#2f2420',
      cardContainerForeground: '#ffffff',
      cardContainerBorder: '#423530',
      
      shimmerGradient: 'linear-gradient(90deg, #9dbf96 0%, #c5e2c1 20%, #5b6fd4 40%, #b85a3e 60%, #5b6fd4 80%, #c5e2c1 100%)',
    },
  },
  
  default: {
    id: 'default',
    name: 'Default',
    description: 'Clean, minimalist black and white theme',
    light: {
      // Color palettes - grayscale
      orange: {
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
      },
      green: {
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
      },
      blue: {
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
      },
      
      // Semantic colors - white background, black text
      background: '#ffffff',
      foreground: '#000000',
      card: '#f5f5f5',
      cardForeground: '#000000',
      popover: '#ffffff',
      popoverForeground: '#000000',
      primary: '#000000',
      primaryForeground: '#ffffff',
      secondary: '#f5f5f5',
      secondaryForeground: '#000000',
      muted: '#f5f5f5',
      mutedForeground: '#737373',
      accent: '#262626',
      accentForeground: '#ffffff',
      destructive: '#ef4444',
      destructiveForeground: '#ffffff',
      border: '#e5e5e5',
      input: '#f5f5f5',
      ring: '#000000',
      
      // Component-specific
      headerBg: '#ffffff',
      headerBgRgb: '255, 255, 255',
      headerBorder: '#e5e5e5',
      headerTitle: '#000000',
      headerLink: '#000000',
      headerLinkHover: '#737373',
      headerLinkBgHover: '#f5f5f5',
      
      footerBg: '#f5f5f5',
      footerText: '#000000',
      footerBorder: '#e5e5e5',
      
      cardContainerBg: '#f5f5f5',
      cardContainerForeground: '#000000',
      cardContainerBorder: '#e5e5e5',
      
      shimmerGradient: 'linear-gradient(90deg, #000000 0%, #737373 20%, #a3a3a3 40%, #737373 60%, #000000 80%, #262626 100%)',
    },
    dark: {
      // Color palettes - grayscale (same as light)
      orange: {
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
      },
      green: {
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
      },
      blue: {
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
      },
      
      // Semantic colors - black background, white text
      background: '#000000',
      foreground: '#ffffff',
      card: '#171717',
      cardForeground: '#ffffff',
      popover: '#171717',
      popoverForeground: '#ffffff',
      primary: '#ffffff',
      primaryForeground: '#000000',
      secondary: '#262626',
      secondaryForeground: '#ffffff',
      muted: '#262626',
      mutedForeground: '#a3a3a3',
      accent: '#f5f5f5',
      accentForeground: '#000000',
      destructive: '#ef4444',
      destructiveForeground: '#ffffff',
      border: '#262626',
      input: '#171717',
      ring: '#ffffff',
      
      // Component-specific
      headerBg: '#000000',
      headerBgRgb: '0, 0, 0',
      headerBorder: '#262626',
      headerTitle: '#ffffff',
      headerLink: '#ffffff',
      headerLinkHover: '#a3a3a3',
      headerLinkBgHover: '#171717',
      
      footerBg: '#171717',
      footerText: '#ffffff',
      footerBorder: '#262626',
      
      cardContainerBg: '#171717',
      cardContainerForeground: '#ffffff',
      cardContainerBorder: '#262626',
      
      shimmerGradient: 'linear-gradient(90deg, #ffffff 0%, #a3a3a3 20%, #737373 40%, #a3a3a3 60%, #ffffff 80%, #d4d4d4 100%)',
    },
  },
};

export const themeIds = Object.keys(themes) as Array<keyof typeof themes>;
export const defaultThemeId = 'tloas';
