import React from 'react';
import { BlurView } from 'expo-blur';
import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';

import { useTheme } from '@/hooks/use-theme';

import Description from '@/components/ui/Description';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function modal() {
  const { title, description } = useLocalSearchParams();
  const theme = useTheme((state) => state.theme);

  const onClose = () => {
    router.back();
  };

  return (
    <Pressable onPress={onClose} className="flex-1">
      <BlurView
        intensity={100}
        tint="dark"
        className="flex-1 items-center justify-center px-4"
      >
        <Pressable
          onPress={(e) => e.stopPropagation()}
          className="w-[90%] bg-white dark:bg-accent-default rounded-lg pt-2 px-4 pb-3"
        >
          <View className="flex-row items-center justify-between mb-2">
            <Text className="text-xl font-medium text-black dark:text-white">
              {title}
            </Text>
            <TouchableOpacity onPress={onClose}>
              <MaterialCommunityIcons
                name="close"
                size={18}
                color={theme === 'light' ? 'black' : 'white'}
              />
            </TouchableOpacity>
          </View>
          <Description text={description} />
        </Pressable>
      </BlurView>
    </Pressable>
  );
}
