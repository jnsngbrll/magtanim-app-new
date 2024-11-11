import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Link, Href } from 'expo-router';

import { useSearchInput } from '@/hooks/use-search-input';
import { useSortAlpha } from '@/hooks/use-sort-alpha';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Header() {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const { searchInput, updateSearchInput } = useSearchInput((state) => ({
    searchInput: state.searchInput,
    updateSearchInput: state.updateSearchInput,
  }));
  const { isSortAlpha, toggleSortAlpha } = useSortAlpha((state) => ({
    isSortAlpha: state.isSortAlpha,
    toggleSortAlpha: state.toggleSortAlpha,
  }));

  const onFocus = () => {
    setIsFocus(true);
  };

  const onBlur = () => {
    setIsFocus(false);
  };

  const { t } = useTranslation();

  const iconSize = 25;
  const primaryColor = '#28B463';
  const secondaryColor = '#808080';

  return (
    <View className="flex-row items-center gap-x-2">
      <View className="flex-1 p-2 bg-primary-200 dark:bg-accent-default rounded-full relative">
        <View className="absolute top-[21px] left-5 z-10">
          <MaterialCommunityIcons
            name="magnify"
            size={18}
            color={isFocus ? primaryColor : secondaryColor}
          />
        </View>
        <TextInput
          value={searchInput}
          onChangeText={updateSearchInput}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={t('searchCrop')}
          placeholderTextColor={secondaryColor}
          className="h-[44px] px-10 bg-secondary-default dark:bg-accent-200 text-black dark:text-white rounded-full"
        />
        {searchInput.length > 0 && (
          <TouchableOpacity
            onPress={() => updateSearchInput('')}
            className="absolute top-[21px] right-5"
          >
            <MaterialCommunityIcons
              name="close"
              size={18}
              color={secondaryColor}
            />
          </TouchableOpacity>
        )}
      </View>
      <View className="flex-row items-center gap-x-2">
        <TouchableOpacity onPress={() => toggleSortAlpha()}>
          <MaterialCommunityIcons
            name="sort-alphabetical-ascending"
            size={iconSize}
            color={isSortAlpha ? primaryColor : secondaryColor}
          />
        </TouchableOpacity>
        <Link href={'/filter' as Href<string>} asChild>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="filter-outline"
              size={iconSize}
              color={secondaryColor}
            />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
