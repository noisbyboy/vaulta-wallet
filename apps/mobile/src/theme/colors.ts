// apps/mobile/src/theme/colors.ts

export const palette = {
  // Warna Primer (Ungu)
  purpleBackground: '#1E1B3A',
  purpleDark: '#4C1D95',
  purpleMain: '#7C3AED',
  purpleLight: '#DDD6FE',

  // Warna Aksen (Teal/Hijau)
  tealMain: '#14B8A6',
  tealLight: '#2DD4BF',
  greenSuccess: '#22C55E',

  // Warna Netral (Teks & Struktur UI)
  textMain: '#F9FAFB',
  textSecondary: '#9CA3AF',
  borderStroke: '#374151',
  cardBackground: '#2A274F',

  // Warna Status (Umpan Balik Sistem)
  errorRed: '#EF4444',
  warningYellow: '#F59E0B',
};

// Colors untuk compatibility dengan hook useThemeColor
const tintColorLight = '#7C3AED'; // purpleMain
const tintColorDark = '#DDD6FE';  // purpleLight

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: palette.textMain,
    background: palette.purpleBackground,
    tint: tintColorDark,
    icon: palette.textSecondary,
    tabIconDefault: palette.textSecondary,
    tabIconSelected: tintColorDark,
  },
};

// Export individual colors
export const PRIMARY_BACKGROUND = palette.purpleBackground;
export const ACCENT_TEAL = palette.tealMain;