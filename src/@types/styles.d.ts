import 'styled-components';
import theme from '../theme/index';

declare module 'styled-components' {
  export interface DefaultTheme {
    COLORS: {
      WHITE: string;
      DARK: string,
      GRAY50: string,
      GRAY200: string,
      GRAY500: string,
      GRAY800: string,
      GRAY900: string,

      OVERLAY: string,
    };

    FONT_FAMILY: {
      LIGHT: string,
      REGULAR: string,
      SEMIBOLD: string,
      BOLD: string,
      BLACK: string,
    };

    FONT_SIZE: {
      MEDIUM: number,
      LARGE: number,
      EXTRALARGE: number,
    }
    
  }

  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}

