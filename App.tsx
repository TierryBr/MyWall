import React from 'react';
import { Routes } from '@routes';
import { useFonts } from 'expo-font';
import {
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [loadedFonts] = useFonts({
    Regular: Nunito_300Light,
    Italic: Nunito_400Regular,
    Black: Nunito_700Bold,
  });

  if (!loadedFonts) {
    SplashScreen.hideAsync();
  }
  return <Routes />;
}
