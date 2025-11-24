/**
 * Trafalgar Law Theme Definition
 * 
 * Inspired by the Surgeon of Death - bold yellow and black theme representing the Heart Pirates
 */

import type { ThemeDefinition } from '../types';
import { createYellowPalette, createGrayscalePalette } from '../utils';

export const trafalgarLawTheme: ThemeDefinition = {
  id: 'trafalgarlaw',
  name: 'Trafalgar Law',
  description: 'Inspired by the Surgeon of Death - bold yellow and black theme representing the Heart Pirates',
  
  colorPalettes: {
    orange: createYellowPalette(),
    green: createYellowPalette(),
    blue: createGrayscalePalette(),
  },
  
  lightMode: {
    // Semantic colors - Yellow instead of white
    background: '#ffd700',
    foreground: '#000000',
    card: '#ffea52',
    cardForeground: '#000000',
    popover: '#ffd700',
    popoverForeground: '#000000',
    primary: '#000000',
    primaryForeground: '#ffd700',
    secondary: '#ffd700',
    secondaryForeground: '#000000',
    muted: '#ffea52',
    mutedForeground: '#424242',
    accent: '#1f1f1f',
    accentForeground: '#ffd700',
    destructive: '#ef4444',
    destructiveForeground: '#ffd700',
    border: '#ffd700',
    input: '#ffea52',
    ring: '#000000',
    
    // Component-specific
    headerBg: '#ffd700',
    headerBgRgb: '255, 215, 0',
    headerBorder: '#e6c200',
    headerTitle: '#000000',
    headerLink: '#000000',
    headerLinkHover: '#424242',
    headerLinkBgHover: '#ffea52',
    
    footerBg: '#ffea52',
    footerText: '#000000',
    footerBorder: '#ffd700',
    
    cardContainerBg: '#ffea52',
    cardContainerForeground: '#000000',
    cardContainerBorder: '#ffd700',
    
    // Button component colors (mapped to current semantic colors)
    buttonPrimaryBg: '#000000', // primary
    buttonPrimaryFg: '#ffd700', // primary-foreground
    buttonPrimaryHover: '#000000', // primary (with opacity applied in CSS)
    buttonSecondaryBg: '#ffea52', // muted
    buttonSecondaryFg: '#424242', // muted-foreground
    buttonSecondaryHover: '#ffea52', // muted (with opacity applied in CSS)
    buttonSecondaryBorder: '#ffd700', // border
    buttonGhostBg: 'transparent', // transparent
    buttonGhostFg: '#000000', // foreground
    buttonGhostHover: '#fff380', // accent
    buttonGhostHoverFg: '#000000', // accent-foreground
    buttonRing: '#ffd700', // ring
    
    // Card component colors (mapped to current semantic colors)
    cardBg: '#ffea52', // card
    cardFg: '#000000', // card-foreground
    cardHeaderBg: '#ffea52', // card (with brightness filter in CSS)
    cardFooterBg: '#ffea52', // card (with brightness filter in CSS)
    cardInnerBorder: 'rgba(168, 148, 127, 0.15)', // current card-inner-border
    
    // ThemeModeButton component colors (mapped to current semantic colors)
    themeModeButtonActiveBg: '#000000', // primary
    themeModeButtonActiveFg: '#ffd700', // primary-foreground
    themeModeButtonHoverBg: '#ffea52', // secondary
    
    // ThemeOptionButton component colors (mapped to current semantic colors)
    themeOptionButtonActiveBg: '#000000', // primary
    themeOptionButtonActiveFg: '#ffd700', // primary-foreground
    themeOptionButtonHoverBg: '#ffea52', // secondary
    
    shimmerGradient: 'linear-gradient(90deg, #000000 0%, #424242 20%, #8a8a8a 40%, #424242 60%, #000000 80%, #1f1f1f 100%)',
  },
  
  darkMode: {
    // Semantic colors - Black background with yellow accents
    background: '#0a0a0a',
    foreground: '#ffd700',
    card: '#1f1f1f',
    cardForeground: '#ffd700',
    popover: '#1f1f1f',
    popoverForeground: '#ffd700',
    primary: '#ffd700',
    primaryForeground: '#000000',
    secondary: '#2e2e2e',
    secondaryForeground: '#ffd700',
    muted: '#1f1f1f',
    mutedForeground: '#c7a500',
    accent: '#fff380',
    accentForeground: '#000000',
    destructive: '#8a8a8a',
    destructiveForeground: '#ffd700',
    border: '#424242',
    input: '#1f1f1f',
    ring: '#ffd700',
    
    // Component-specific
    headerBg: '#000000',
    headerBgRgb: '0, 0, 0',
    headerBorder: '#2e2e2e',
    headerTitle: '#ffd700',
    headerLink: '#ffd700',
    headerLinkHover: '#fff380',
    headerLinkBgHover: '#1f1f1f',
    
    footerBg: '#141414',
    footerText: '#ffd700',
    footerBorder: '#2e2e2e',
    
    cardContainerBg: '#141414',
    cardContainerForeground: '#ffd700',
    cardContainerBorder: '#2e2e2e',
    
    // Button component colors (mapped to current semantic colors)
    buttonPrimaryBg: '#ffd700', // primary
    buttonPrimaryFg: '#000000', // primary-foreground
    buttonPrimaryHover: '#ffd700', // primary (with opacity applied in CSS)
    buttonSecondaryBg: '#1f1f1f', // muted
    buttonSecondaryFg: '#c7a500', // muted-foreground
    buttonSecondaryHover: '#1f1f1f', // muted (with opacity applied in CSS)
    buttonSecondaryBorder: '#424242', // border
    buttonGhostBg: 'transparent', // transparent
    buttonGhostFg: '#ffd700', // foreground
    buttonGhostHover: '#fff380', // accent
    buttonGhostHoverFg: '#000000', // accent-foreground
    buttonRing: '#ffd700', // ring
    
    // Card component colors (mapped to current semantic colors)
    cardBg: '#1f1f1f', // card
    cardFg: '#ffd700', // card-foreground
    cardHeaderBg: '#1f1f1f', // card (with brightness filter in CSS)
    cardFooterBg: '#1f1f1f', // card (with brightness filter in CSS)
    cardInnerBorder: 'rgba(140, 107, 95, 0.15)', // current dark card-inner-border
    
    // ThemeModeButton component colors (mapped to current semantic colors)
    themeModeButtonActiveBg: '#ffd700', // primary
    themeModeButtonActiveFg: '#000000', // primary-foreground
    themeModeButtonHoverBg: '#2e2e2e', // secondary
    
    // ThemeOptionButton component colors (mapped to current semantic colors)
    themeOptionButtonActiveBg: '#ffd700', // primary
    themeOptionButtonActiveFg: '#000000', // primary-foreground
    themeOptionButtonHoverBg: '#2e2e2e', // secondary
    
    shimmerGradient: 'linear-gradient(90deg, #ffd700 0%, #fff380 20%, #000000 40%, #ffd700 60%, #fff9ad 80%, #000000 100%)',
  },
};