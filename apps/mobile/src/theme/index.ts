// src/theme/index.ts
import { palette } from './colors';
import { spacing } from './spacing';
import { fontFamily, fontSize, lineHeight, textStyles } from './typography';
import { images } from './images';

export const theme = {
  colors: palette,
  spacing,
  typography: {
    fontFamily,
    fontSize,
    lineHeight,
    textStyles,
  },
  images,
} as const;

export type Theme = typeof theme;

// Export individual modules for convenience
export { palette as colors } from './colors';
export { spacing } from './spacing';
export { fontFamily, fontSize, lineHeight, textStyles } from './typography';

// Default export
export default theme;
