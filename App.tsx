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
import { THEME } from './src/theme';

import { createTheme } from '@utils/Themes';
import * as SplashScreen from 'expo-splash-screen';
import { ActivityIndicator, SafeAreaView, StatusBar, View } from 'react-native';

export default function App() {
  const [loadedFonts] = useFonts({
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_900Black,
  });

  return (
    <View style={{ flex: 1 }}>
      <ThemeProvider theme={createTheme('themeLight')}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {loadedFonts ? (
          <Routes />
        ) : (
          <ActivityIndicator color={THEME.COLORS.WHITE} />
        )}
      </ThemeProvider>
    </View>
  );
}
