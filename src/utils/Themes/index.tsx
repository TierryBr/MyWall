import { ETheme } from '@types/theme';
import themesProvider from '../../theme/ThemesProvider';

export const createTheme = (theme: ETheme) => {
  if (theme === 'themeLight') {
    return themesProvider.themeLight;
  } else return themesProvider.themeDark;
};
