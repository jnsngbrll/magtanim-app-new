import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, TouchableOpacity } from 'react-native';
import { Link, Href } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { useTheme } from '@/hooks/use-theme';
import Header from '@/components/ui/Header';
import more from '@/constants/more';
import Title from '@/components/ui/Title';
import getMoreIcon from '@/actions/get-more-icon';
import Label from '@/components/ui/Label';

export default function More() {
  const theme = useTheme((state) => state.theme);

  return (
    <SafeAreaView className="flex-1 bg-secondary-100 dark:bg-accent-200">
      <View className="space-y-4">
        <Header title="More" />
        <View className="space-y-8">
          {more.map((m) => (
            <View key={m.title} className="space-y-4">
              <Title text={m.title} fontSize="[16px]" />
              <View className="space-y-2">
                {m.items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.route as Href<string>}
                    asChild
                  >
                    <TouchableOpacity className="flex-row items-center">
                      <View className="mr-4">{getMoreIcon(item.label)}</View>
                      <Label text={item.label} />
                    </TouchableOpacity>
                  </Link>
                ))}
              </View>
            </View>
          ))}
        </View>
      </View>
      <StatusBar style={theme === 'light' ? 'dark' : 'light'} />
    </SafeAreaView>
  );
}
