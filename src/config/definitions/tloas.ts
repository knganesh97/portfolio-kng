/**
 * The Life of a Showgirl Theme Definition
 * 
 * Rustic nature aesthetic with warm rust/terracotta oranges, sage greens, and blue accents
 */

import type { ThemeDefinition } from '../types';
import { createRustPalette, createSagePalette, createBluePalette } from '../utils';

export const tloasTheme: ThemeDefinition = {
  id: 'tloas',
  name: 'The Life of a Showgirl',
  description: 'Rustic nature aesthetic with warm rust/terracotta oranges, sage greens, and blue accents',
  
  colorPalettes: {
    orange: createRustPalette(),
    green: createSagePalette(),
    blue: createBluePalette(),
  },
  
  lightMode: {
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
  
  darkMode: {
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
};