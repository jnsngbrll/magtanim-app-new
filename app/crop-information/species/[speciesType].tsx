import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, useLocalSearchParams } from 'expo-router';
import { useTranslation } from 'react-i18next';

import Header from '@/components/ui/Header';
import species from '@/constants/species';

export default function SpeciesType() {
  const { speciesType } = useLocalSearchParams();
  const { t } = useTranslation();

  const filteredSpecies = species.filter(
    (species) => species.collections === speciesType
  );

  const sortedFilteredSpecies = filteredSpecies.sort((a, b) =>
    t(a.name.replaceAll(' ', '')).localeCompare(t(b.name.replaceAll(' ', '')))
  );

  return (
    <SafeAreaView className="flex-1 bg-secondary-100 dark:bg-accent-200">
      <View className="h-full pb-2 px-4 space-y-4">
        <Header title={speciesType as string} />
        <FlatList
          data={sortedFilteredSpecies}
          numColumns={1}
          renderItem={({ item }) => (
            <Link
              href={{
                pathname:
                  '/crop-information/species/species-information/[speciesID]',
                params: { speciesID: item.id },
              }}
              asChild
            >
              <TouchableOpacity className="p-2 flex-row bg-white dark:bg-accent-default rounded-xl">
                <Image
                  source={item.image}
                  className="w-24 h-24 mr-2 rounded-md"
                />
                <Text className="text-black dark:text-white">
                  {t(item.name.replaceAll(' ', ''))}
                </Text>
              </TouchableOpacity>
            </Link>
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View className="h-2"></View>}
        />
      </View>
    </SafeAreaView>
  );
}
