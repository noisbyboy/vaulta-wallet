// src/theme/typography.ts
export const fontFamily = {
  // Inter - untuk body text dan UI elements
  inter: {
    regular: 'Inter_400Regular',
    medium: 'Inter_500Medium',
    semiBold: 'Inter_600SemiBold',
    bold: 'Inter_700Bold',
  },
  // Sora - untuk headings dan titles
  sora: {
    regular: 'Sora_400Regular',
    medium: 'Sora_500Medium',
    semiBold: 'Sora_600SemiBold',
    bold: 'Sora_700Bold',
  },
  // SpaceMono - untuk code/monospace
  spaceMono: 'SpaceMono',
} as const;

export const fontSize = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 36,
  '5xl': 48,
} as const;

export const lineHeight = {
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
} as const;

// Predefined text styles
export const textStyles = {
  // Headings (menggunakan Sora)
  h1: {
    fontFamily: fontFamily.sora.bold,
    fontSize: fontSize['4xl'],
    lineHeight: fontSize['4xl'] * lineHeight.tight,
  },
  h2: {
    fontFamily: fontFamily.sora.semiBold,
    fontSize: fontSize['3xl'],
    lineHeight: fontSize['3xl'] * lineHeight.tight,
  },
  h3: {
    fontFamily: fontFamily.sora.semiBold,
    fontSize: fontSize['2xl'],
    lineHeight: fontSize['2xl'] * lineHeight.snug,
  },
  h4: {
    fontFamily: fontFamily.sora.medium,
    fontSize: fontSize.xl,
    lineHeight: fontSize.xl * lineHeight.snug,
  },
  
  // Body text (menggunakan Inter)
  bodyLarge: {
    fontFamily: fontFamily.inter.regular,
    fontSize: fontSize.lg,
    lineHeight: fontSize.lg * lineHeight.relaxed,
  },
  body: {
    fontFamily: fontFamily.inter.regular,
    fontSize: fontSize.base,
    lineHeight: fontSize.base * lineHeight.normal,
  },
  bodySmall: {
    fontFamily: fontFamily.inter.regular,
    fontSize: fontSize.sm,
    lineHeight: fontSize.sm * lineHeight.normal,
  },
  
  // UI elements (menggunakan Inter)
  button: {
    fontFamily: fontFamily.inter.semiBold,
    fontSize: fontSize.base,
    lineHeight: fontSize.base * lineHeight.tight,
  },
  caption: {
    fontFamily: fontFamily.inter.regular,
    fontSize: fontSize.xs,
    lineHeight: fontSize.xs * lineHeight.normal,
  },
  label: {
    fontFamily: fontFamily.inter.medium,
    fontSize: fontSize.sm,
    lineHeight: fontSize.sm * lineHeight.tight,
  },
  
  // Code/Monospace
  code: {
    fontFamily: fontFamily.spaceMono,
    fontSize: fontSize.sm,
    lineHeight: fontSize.sm * lineHeight.normal,
  },
} as const;
