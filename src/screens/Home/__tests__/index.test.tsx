import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import themesProvider from '../../../theme/ThemesProvider';
import { Home } from '../index';
import { Provider } from 'react-redux';
import { store } from '../../../store';

describe('Home', () => {
  test('the component rendered', () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={themesProvider.themeLight}>
          <Home />
        </ThemeProvider>
      </Provider>,
    );
  });
});
