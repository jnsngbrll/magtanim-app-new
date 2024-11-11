import React, { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { I18nextProvider } from 'react-i18next';
import { View } from 'react-native';
import { Stack } from 'expo-router';

import { useTheme } from '@/hooks/use-theme';
import { useFavorites } from '@/hooks/use-favorites';

import i18n from '@/utils/i18n';

// Prevent splash screen auto hide
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const loadTheme = useTheme((state) => state.loadTheme);
  const loadFavorites = useFavorites((state) => state.loadFavorites);

  // Hide the splash screen when the resources are loaded
  useEffect(() => {
    const prepareApp = async () => {
      try {
        await Promise.all([loadTheme(), loadFavorites()]);
      } catch (error) {
        console.error('Error loading resources:', error);
      } finally {
        SplashScreen.hideAsync();
      }
    };

    prepareApp();
  }, [loadTheme, loadFavorites]);

  return (
    <I18nextProvider i18n={i18n}>
      <View className="flex-1 relative">
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="crop-information/[cropID]" />
          <Stack.Screen
            name="(modals)/filter"
            options={{
              presentation: 'transparentModal',
              animation: 'fade',
            }}
          />
          <Stack.Screen
            name="(modals)/quickInfo"
            options={{
              presentation: 'transparentModal',
              animation: 'fade',
            }}
          />
          <Stack.Screen name="crop-information/species/[speciesType]" />
          <Stack.Screen name="crop-information/species/species-information/[speciesID]" />
          <Stack.Screen name="settings/index" />
        </Stack>
      </View>
    </I18nextProvider>
  );
}
