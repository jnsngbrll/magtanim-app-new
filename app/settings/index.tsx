import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Switch } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';

import { useTheme } from '@/hooks/use-theme';

import i18n from '@/utils/i18n';
import Header from '@/components/ui/Header';
import Label from '@/components/ui/Label';
import Title from '@/components/ui/Title';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Settings() {
  const [isFilipino, setIsFilipino] = useState(i18n.language === 'fil');
  const { theme, toggleTheme } = useTheme((state) => ({
    theme: state.theme,
    toggleTheme: state.toggleTheme,
  }));

  // Toggle language and persist the new preference
  const toggleLanguage = async () => {
    const newLanguage = isFilipino ? 'en' : 'fil';
    try {
      await AsyncStorage.setItem('appLanguage', newLanguage);
      i18n.changeLanguage(newLanguage);
      setIsFilipino(!isFilipino);
    } catch (error) {
      console.error('Error setting language preference:', error);
    }
  };

  // Retrieve and set the initial language preference
  useEffect(() => {
    const initializeLanguage = async () => {
      try {
        const savedLanguage = await AsyncStorage.getItem('appLanguage');
        if (savedLanguage) {
          setIsFilipino(savedLanguage === 'fil');
          i18n.changeLanguage(savedLanguage);
        }
      } catch (error) {
        console.error('Error retrieving language preference:', error);
      }
    };
    initializeLanguage();
  }, []);

  const isDarkMode = theme === 'dark';

  const iconSize = 25;
  const primaryColor = '#28B463';
  const secondaryColor = '#808080';

  return (
    <SafeAreaView className="flex-1 bg-secondary-100 dark:bg-accent-200">
      <View className="px-4 space-y-4">
        <Header title="Settings" />
        <View className="space-y-8">
          <View>
            <Title text="theme" fontSize="[16px]" />
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <View className="mr-4">
                  <MaterialCommunityIcons
                    name="moon-waning-crescent"
                    size={iconSize}
                    color={secondaryColor}
                  />
                </View>
                <Label text="darkMode" />
              </View>
              <Switch
                value={isDarkMode}
                onChange={toggleTheme}
                thumbColor={isDarkMode ? primaryColor : secondaryColor}
                trackColor={{ false: '#FFFFFF', true: '#A9DFBF' }}
              />
            </View>
          </View>
          <View>
            <Title text="language" fontSize="[16px]" />
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <View className="mr-4">
                  <MaterialCommunityIcons
                    name="earth"
                    size={iconSize}
                    color={secondaryColor}
                  />
                </View>
                <Label text="Filipino" />
              </View>
              <Switch
                value={isFilipino}
                onChange={toggleLanguage}
                thumbColor={isFilipino ? primaryColor : secondaryColor}
                trackColor={{ false: '#FFFFFF', true: '#A9DFBF' }}
              />
            </View>
          </View>
        </View>
      </View>
      <StatusBar style={theme === 'light' ? 'dark' : 'light'} />
    </SafeAreaView>
  );
}
