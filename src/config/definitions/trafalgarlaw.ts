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
    secondary: '#ffea52',
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
    
    shimmerGradient: 'linear-gradient(90deg, #000000 0%, #424242 20%, #8a8a8a 40%, #424242 60%, #000000 80%, #1f1f1f 100%)',
  },
  
  darkMode: {
    // Semantic colors - Black background with yellow accents
    background: '#0a0a0a',
    foreground: '#ffd700',
    card: '#ffea52',
    cardForeground: '#000000',
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
    
    shimmerGradient: 'linear-gradient(90deg, #ffd700 0%, #fff380 20%, #000000 40%, #ffd700 60%, #fff9ad 80%, #000000 100%)',
  },
};