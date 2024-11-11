import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Href, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { useTheme } from '@/hooks/use-theme';

export default function WelcomeScreen() {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);
  const theme = useTheme((state) => state.theme);

  const activityIndicatorColor = theme === 'light' ? '#28B463' : '#333333';

  const checkLaunchStatus = async () => {
    try {
      const hasLaunched = await AsyncStorage.getItem('hasLaunched');
      if (!hasLaunched) {
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
        router.replace('crops' as Href<string>);
      }
    } catch (error) {
      console.error('Error checking launch status', error);
    }
  };

  // Check launch status
  useEffect(() => {
    checkLaunchStatus();
  }, []);

  const onGetStarted = async () => {
    await AsyncStorage.setItem('hasLaunched', 'true');
    router.replace('crops' as Href<string>);
  };

  return (
    <SafeAreaView className="flex-1 px-4 bg-secondary-100 dark:bg-accent-200">
      <View className="h-full items-center justify-center relative">
        {isFirstLaunch === null ? (
          <ActivityIndicator size="large" color={activityIndicatorColor} />
        ) : (
          <>
            <View className="items-center gap-y-8">
              <Image
                source={require('@/assets/images/welcome.png')}
                className="w-80 h-80"
              />
              <View className="space-y-2">
                <Text className="text-xl font-semibold text-black text-center">
                  Welcome to{' '}
                  <Text className="font-bold text-primary-200">Magtanim</Text>!
                </Text>
                <Text className="text-secondary-200 text-center">
                  Discover simple tips for planting, growing, {'\n'} and caring
                  for your crops.
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={onGetStarted}
              className="absolute bottom-2.5 w-[90%] p-4 bg-primary-200 rounded-full"
            >
              <Text className="text-xl font-semibold text-white text-center">
                Get Started
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}
