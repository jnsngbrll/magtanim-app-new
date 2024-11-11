import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { useTranslation } from 'react-i18next';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const { t } = useTranslation();
  const formattedTitle = t(title?.replaceAll(' ', ''));

  return (
    <View className="p-4 bg-primary-200 dark:bg-accent-default flex-row items-center space-x-4 rounded-full">
      <TouchableOpacity onPress={() => router.back()}>
        <MaterialCommunityIcons name="arrow-left" size={25} color="#FFFF" />
      </TouchableOpacity>
      <Text className="text-xl font-medium text-white">{formattedTitle}</Text>
    </View>
  );
};
export default Header;
