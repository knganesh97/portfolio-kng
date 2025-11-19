/**
 * Theme Type Definitions
 * 
 * Centralized type definitions for all theme-related structures.
 */

export interface ThemeColors {
  // Base color palettes (shades 50-950)
  orange: ColorPalette;
  green: ColorPalette;
  blue: ColorPalette;
  
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
  
  // Button component colors
  buttonPrimaryBg: string;
  buttonPrimaryFg: string;
  buttonPrimaryHover: string;
  buttonSecondaryBg: string;
  buttonSecondaryFg: string;
  buttonSecondaryHover: string;
  buttonSecondaryBorder: string;
  buttonGhostBg: string;
  buttonGhostFg: string;
  buttonGhostHover: string;
  buttonGhostHoverFg: string;
  buttonRing: string;
  
  // Card component colors
  cardBg: string;
  cardFg: string;
  cardHeaderBg: string;
  cardFooterBg: string;
  cardInnerBorder: string;
  
  // ThemeModeButton component colors
  themeModeButtonActiveBg: string;
  themeModeButtonActiveFg: string;
  themeModeButtonHoverBg: string;
  
  // ThemeOptionButton component colors
  themeOptionButtonActiveBg: string;
  themeOptionButtonActiveFg: string;
  themeOptionButtonHoverBg: string;
  
  shimmerGradient: string;
}

export interface ColorPalette {
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
}

export interface Theme {
  id: string;
  name: string;
  description: string;
  light: ThemeColors;
  dark: ThemeColors;
}

export interface ThemeDefinition {
  id: string;
  name: string;
  description: string;
  colorPalettes: {
    orange: ColorPalette;
    green: ColorPalette;
    blue: ColorPalette;
  };
  lightMode: Omit<ThemeColors, 'orange' | 'green' | 'blue'>;
  darkMode: Omit<ThemeColors, 'orange' | 'green' | 'blue'>;
}