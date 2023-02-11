import { DefaultTheme } from 'styled-components/native';

export const themeLight: DefaultTheme = {
  COLORS: {
    WHITE: '#FFFFFF',
    DARK: '#121212',
    GRAY50: '#FAFAFA',
    GRAY200: '#EEEEEE',
    GRAY500: '#9E9E9E',
    GRAY800: '#FAFAFA',
    GRAY900: '#FAFAFA',

    OVERLAY: 'rgba(189, 195, 199, 0.9)',
  },

  FONT_FAMILY: {
    LIGHT: 'Nunito_300Light',
    REGULAR: 'Nunito_400Regular',
    SEMIBOLD: 'Nunito_600SemiBold',
    BOLD: 'Nunito_700Bold',
    BLACK: 'Nunito_900Black',
  },

  FONT_SIZE: {
    MEDIUM: 14,
    LARGE: 16,
    EXTRALARGE: 24,
  }
}