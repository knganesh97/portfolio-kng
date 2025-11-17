/**
 * Theme Definitions Index
 * 
 * Central registry for all theme definitions.
 * To add a new theme, import it here and add it to the themeDefinitions array.
 */

export { defaultTheme } from './default';
export { trafalgarLawTheme } from './trafalgarlaw';
export { tloasTheme } from './tloas';

import { defaultTheme } from './default';
import { trafalgarLawTheme } from './trafalgarlaw';
import { tloasTheme } from './tloas';

/**
 * Array of all theme definitions.
 * Add new themes here to make them available in the application.
 */
export const themeDefinitions = [
  defaultTheme,
  trafalgarLawTheme,
  tloasTheme,
];