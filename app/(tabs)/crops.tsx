import React, { useCallback, useMemo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { useFavorites } from '@/hooks/use-favorites';
import { useSearchInput } from '@/hooks/use-search-input';
import { useCropsFilter, useCropQuickInfoFilter } from '@/hooks/use-filter';
import { useCategory } from '@/hooks/use-category';
import { useSortAlpha } from '@/hooks/use-sort-alpha';

import crops from '@/constants/crops';
import Header from '@/components/sections/crops/Header';
import Categories from '@/components/sections/crops/Categories';
import ListOfCrops from '@/components/sections/crops/ListOfCrops';

export default function Crops() {
  const favorites = useFavorites((state) => state.favorites);
  const searchInput = useSearchInput((state) => state.searchInput);
  const acitveCropsFilter = useCropsFilter((state) => state.acitveCropsFilter);
  const cropQuickInfoFilterOptions = useCropQuickInfoFilter(
    (state) => state.cropQuickInfoFilterOptions
  );
  const activeCategory = useCategory((state) => state.activeCategory);
  const isSortAlpha = useSortAlpha((state) => state.isSortAlpha);

  const { t } = useTranslation();

  const filterByCropQuickInfo = useCallback(
    (crop: any) => {
      const sunFilter =
        (!cropQuickInfoFilterOptions.fullSun &&
          !cropQuickInfoFilterOptions.shade) ||
        crop.quickInfo.some(
          (info: any) =>
            info.title === 'Sun' &&
            ((cropQuickInfoFilterOptions.fullSun &&
              info.value.includes('Full sun')) ||
              (cropQuickInfoFilterOptions.shade &&
                info.value.includes('Shade')))
        );

      const seasonFilter =
        (!cropQuickInfoFilterOptions.cool &&
          !cropQuickInfoFilterOptions.warm &&
          !cropQuickInfoFilterOptions.perennial) ||
        crop.quickInfo.some(
          (info: any) =>
            info.title === 'Season' &&
            ((cropQuickInfoFilterOptions.cool && info.value.includes('Cool')) ||
              (cropQuickInfoFilterOptions.warm &&
                info.value.includes('Warm')) ||
              (cropQuickInfoFilterOptions.perennial &&
                info.value.includes('Perennial')))
        );

      return sunFilter && seasonFilter;
    },
    [cropQuickInfoFilterOptions, favorites]
  );

  const filteredCrops = useMemo(() => {
    const filtered = crops.filter((crop) => {
      const formattedName = t(crop.name.replaceAll(' ', ''));

      // Filter crops based on the user inputs
      const matchesName = formattedName
        .replaceAll(' ', '')
        .toLowerCase()
        .includes(searchInput.replaceAll(' ', '').toLowerCase());

      // Filter crops based on the active crops filter
      const matchesActiveCropsFilter =
        acitveCropsFilter === 'all' ||
        (acitveCropsFilter === 'favorite' &&
          favorites.some((favorite) => favorite.id === crop.id)) ||
        (acitveCropsFilter === 'notFavorite' &&
          !favorites.some((favorite) => favorite.id === crop.id));

      // Filter crops based on the crop quick info
      const matchesOptions = filterByCropQuickInfo(crop);

      // Filter crops based on the active category
      const matchesCategory =
        activeCategory === 'All' || crop.category === activeCategory;

      return (
        matchesName &&
        matchesActiveCropsFilter &&
        matchesOptions &&
        matchesCategory
      );
    });

    if (isSortAlpha) {
      return filtered.sort((a, b) =>
        t(a.name.replaceAll(' ', '')).localeCompare(
          t(b.name.replaceAll(' ', ''))
        )
      );
    }

    return filtered;
  }, [
    crops,
    t,
    searchInput,
    acitveCropsFilter,
    favorites,
    filterByCropQuickInfo,
    activeCategory,
    isSortAlpha,
  ]);

  return (
    <SafeAreaView className="flex-1 bg-secondary-100 dark:bg-accent-200">
      <View className="space-y-4 relative">
        <Header />
        <Categories />
        <ListOfCrops filteredCrops={filteredCrops} />
      </View>
    </SafeAreaView>
  );
}
