import React from 'react';
import { Routes } from '@routes';
import { useFonts } from 'expo-font';
import {
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_900Black,
} from '@expo-google-fonts/nunito';
import { ThemeProvider } from 'styled-components/native';
import { PersistGate } from 'redux-persist/es/integration/react';
import { useSelector } from 'react-redux';

import { THEME } from './src/theme';
import { persistor } from './src/store';
import { createTheme } from '@utils/Themes';
import { Provider as PaperProvider } from 'react-native-paper';
import { ActivityIndicator, SafeAreaView, StatusBar, View } from 'react-native';

export default function App() {
  const { theme } = useSelector((state: any) => state.reducerTheme);

  const [loadedFonts] = useFonts({
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_900Black,
  });

  const verifyTheme = () => {
    if (theme === 'themeDark') return 'light-content';
    else return 'dark-content';
  };

  return (
    <View style={{ flex: 1 }}>
      <PersistGate persistor={persistor}>
        <PaperProvider>
          <ThemeProvider theme={createTheme(theme)}>
            <StatusBar
              barStyle={verifyTheme()}
              backgroundColor={
                theme !== 'themeDark' ? 'transparent' : THEME.COLORS.DARK
              }
              translucent
            />
            {loadedFonts ? (
              <Routes />
            ) : (
              <ActivityIndicator color={THEME.COLORS.WHITE} />
            )}
          </ThemeProvider>
        </PaperProvider>
      </PersistGate>
    </View>
  );
}
