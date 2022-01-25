import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { RestaurantScreen } from './src/features/restaurants/screens/restaurant.screen';

import { theme } from './src/infrastructure/theme';

export default function App() {
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  let [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!latoLoaded || !oswaldLoaded) {
    return null;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({});
