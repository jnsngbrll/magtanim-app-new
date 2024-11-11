import React from 'react';
import { Tabs } from 'expo-router';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { useFavorites } from '@/hooks/use-favorites';
import { useTheme } from '@/hooks/use-theme';

import TabLabel from '@/components/TabLabel';

import Ionicons from '@expo/vector-icons/Ionicons';

export default function Tabslayout() {
  const favorites = useFavorites((state) => state.favorites);
  const theme = useTheme((state) => state.theme);

  const iconSize = 25;

  return (
    <View className="flex-1 px-4 bg-secondary-100 dark:bg-accent-200">
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarInactiveTintColor: '#808080',
          tabBarActiveTintColor: '#28B463',
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            height: 60,
            backgroundColor: theme === 'light' ? '#FFFFFF' : '#333333',
            borderRadius: 100,
            paddingHorizontal: 15,
            borderTopWidth: 0,
            marginHorizontal: 20,
            marginBottom: 10,
            position: 'relative',
          },
        }}
      >
        <Tabs.Screen
          name="crops"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View className="absolute top-2">
                <Ionicons
                  name={focused ? 'leaf-sharp' : 'leaf-outline'}
                  size={iconSize}
                  color={color}
                  focuses={focused}
                />
              </View>
            ),
            tabBarLabel: ({ focused }) => (
              <TabLabel focused={focused} label="Crop" />
            ),
          }}
        />
        <Tabs.Screen
          name="favorites"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View className="absolute top-2">
                <View className="relative">
                  <Ionicons
                    name={focused ? 'heart' : 'heart-outline'}
                    size={iconSize}
                    color={color}
                    focuses={focused}
                  />
                  {favorites.length > 0 && (
                    <View className="absolute -top-1 left-4 px-1 bg-[#C0392B] border border-secondary-default dark:border-accent-default rounded-full">
                      <Text className="text-xs text-white">
                        {favorites.length}
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            ),
            tabBarLabel: ({ focused }) => (
              <TabLabel focused={focused} label="Favorite" />
            ),
          }}
        />
        <Tabs.Screen
          name="more"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View className="absolute top-2">
                <Ionicons
                  name={
                    focused ? 'ellipsis-vertical' : 'ellipsis-vertical-outline'
                  }
                  size={iconSize}
                  color={color}
                  focuses={focused}
                />
              </View>
            ),
            tabBarLabel: ({ focused }) => (
              <TabLabel focused={focused} label="More" />
            ),
          }}
        />
      </Tabs>
      <StatusBar style={theme === 'light' ? 'dark' : 'light'} />
    </View>
  );
}
