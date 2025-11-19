/**
 * Default Theme Definition
 * 
 * Clean, minimalist black and white theme
 */

import type { ThemeDefinition } from '../types';
import { createGrayscalePalette } from '../utils';

export const defaultTheme: ThemeDefinition = {
  id: 'default',
  name: 'Default',
  description: 'Clean, minimalist black and white theme',
  
  colorPalettes: {
    orange: createGrayscalePalette(),
    green: createGrayscalePalette(),
    blue: createGrayscalePalette(),
  },
  
  lightMode: {
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
    
    // Button component colors (mapped to current semantic colors)
    buttonPrimaryBg: '#000000', // primary
    buttonPrimaryFg: '#ffffff', // primary-foreground
    buttonPrimaryHover: '#000000', // primary (with opacity applied in CSS)
    buttonSecondaryBg: '#f5f5f5', // muted
    buttonSecondaryFg: '#737373', // muted-foreground
    buttonSecondaryHover: '#f5f5f5', // muted (with opacity applied in CSS)
    buttonSecondaryBorder: '#e5e5e5', // border
    buttonGhostBg: 'transparent', // transparent
    buttonGhostFg: '#000000', // foreground
    buttonGhostHover: '#262626', // accent
    buttonGhostHoverFg: '#ffffff', // accent-foreground
    buttonRing: '#000000', // ring
    
    // Card component colors (mapped to current semantic colors)
    cardBg: '#f5f5f5', // card
    cardFg: '#000000', // card-foreground
    cardHeaderBg: '#f5f5f5', // card (with brightness filter in CSS)
    cardFooterBg: '#f5f5f5', // card (with brightness filter in CSS)
    cardInnerBorder: 'rgba(168, 148, 127, 0.15)', // current card-inner-border
    
    // ThemeModeButton component colors (mapped to current semantic colors)
    themeModeButtonActiveBg: '#000000', // primary
    themeModeButtonActiveFg: '#ffffff', // primary-foreground
    themeModeButtonHoverBg: '#f5f5f5', // secondary
    
    // ThemeOptionButton component colors (mapped to current semantic colors)
    themeOptionButtonActiveBg: '#000000', // primary
    themeOptionButtonActiveFg: '#ffffff', // primary-foreground
    themeOptionButtonHoverBg: '#f5f5f5', // secondary
    
    shimmerGradient: 'linear-gradient(90deg, #000000 0%, #737373 20%, #a3a3a3 40%, #737373 60%, #000000 80%, #262626 100%)',
  },
  
  darkMode: {
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
    
    // Button component colors (mapped to current semantic colors)
    buttonPrimaryBg: '#ffffff', // primary
    buttonPrimaryFg: '#000000', // primary-foreground
    buttonPrimaryHover: '#ffffff', // primary (with opacity applied in CSS)
    buttonSecondaryBg: '#262626', // muted
    buttonSecondaryFg: '#a3a3a3', // muted-foreground
    buttonSecondaryHover: '#262626', // muted (with opacity applied in CSS)
    buttonSecondaryBorder: '#262626', // border
    buttonGhostBg: 'transparent', // transparent
    buttonGhostFg: '#ffffff', // foreground
    buttonGhostHover: '#f5f5f5', // accent
    buttonGhostHoverFg: '#000000', // accent-foreground
    buttonRing: '#ffffff', // ring
    
    // Card component colors (mapped to current semantic colors)
    cardBg: '#171717', // card
    cardFg: '#ffffff', // card-foreground
    cardHeaderBg: '#171717', // card (with brightness filter in CSS)
    cardFooterBg: '#171717', // card (with brightness filter in CSS)
    cardInnerBorder: 'rgba(140, 107, 95, 0.15)', // current dark card-inner-border
    
    // ThemeModeButton component colors (mapped to current semantic colors)
    themeModeButtonActiveBg: '#ffffff', // primary
    themeModeButtonActiveFg: '#000000', // primary-foreground
    themeModeButtonHoverBg: '#262626', // secondary
    
    // ThemeOptionButton component colors (mapped to current semantic colors)
    themeOptionButtonActiveBg: '#ffffff', // primary
    themeOptionButtonActiveFg: '#000000', // primary-foreground
    themeOptionButtonHoverBg: '#262626', // secondary
    
    shimmerGradient: 'linear-gradient(90deg, #ffffff 0%, #a3a3a3 20%, #737373 40%, #a3a3a3 60%, #ffffff 80%, #d4d4d4 100%)',
  },
};