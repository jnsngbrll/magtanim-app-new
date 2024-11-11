import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';

import { useCategory } from '@/hooks/use-category';

import categories from '@/constants/categories';

export default function Categories() {
  const { activeCategory, updateActiveCategory } = useCategory((state) => ({
    activeCategory: state.activeCategory,
    updateActiveCategory: state.updateActiveCategory,
  }));

  const { t } = useTranslation();

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View className="mt-4 flex-row">
        {categories?.map((category) => {
          const isActive = category.name === activeCategory;
          const backgroundColor = isActive
            ? 'bg-primary-200'
            : 'bg-secondary-default dark:bg-accent-default';
          const textColor = isActive
            ? 'text-white font-medium'
            : 'text-secondary-200';

          return (
            <TouchableOpacity
              key={category.name}
              onPress={() => updateActiveCategory(category.name)}
              className={`mr-4 py-2 px-4 ${backgroundColor} rounded-full`}
            >
              <Text className={textColor}>{t(category.name)}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}
