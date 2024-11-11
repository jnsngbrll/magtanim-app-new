import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { useTranslation } from 'react-i18next';

import { useTheme } from '@/hooks/use-theme';
import { useFavorites } from '@/hooks/use-favorites';

import ID from '@/components/sections/crop-information/ID';
import crops from '@/constants/crops';
import QuickInfo from '@/components/sections/crop-information/QuickInfo';
import Fertilizers from '@/components/sections/crop-information/Fertilizers';
import Uses from '@/components/sections/crop-information/Uses';
import PDB from '@/components/sections/crop-information/PDB';
import Benefits from '@/components/sections/crop-information/Benefits';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function CropInformation() {
  const { favorites, toggleFavorite } = useFavorites((state) => ({
    favorites: state.favorites,
    toggleFavorite: state.toggleFavorite,
  }));

  const theme = useTheme((state) => state.theme);

  const { cropID } = useLocalSearchParams();
  const crop = crops.find((crop) => crop.id === cropID);

  const { t } = useTranslation();
  const formattedName = t(crop?.name.replaceAll(' ', '') ?? '');
  const isFavorite = favorites.some((favorite) => favorite.id === cropID);

  const iconSize = 25;

  return (
    <SafeAreaView className="flex-1 bg-secondary-100 dark:bg-accent-200">
      <View className="h-full pb-2 px-4 space-y-4">
        <View className="py-2 px-4 bg-primary-200 dark:bg-accent-default flex-row items-center justify-between rounded-full">
          <View className="flex-row items-center">
            <TouchableOpacity onPress={() => router.back()} className="mr-4">
              <MaterialCommunityIcons
                name="arrow-left"
                size={iconSize}
                color="#FFFF"
              />
            </TouchableOpacity>
            <View>
              <Text className="text-xl font-bold text-white">
                {formattedName}
              </Text>
              <Text className="text-secondary-100 italic -mt-1">
                {crop?.scientificName}
              </Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => toggleFavorite(crop, crop?.id)}>
            {isFavorite ? (
              <MaterialCommunityIcons
                name="heart"
                size={iconSize}
                color="#C0392B"
              />
            ) : (
              <MaterialCommunityIcons
                name="heart-outline"
                size={iconSize}
                color={theme === 'dark' ? '#1E1E1E' : '#E5E7E9'}
              />
            )}
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <ID
            background={crop?.background}
            category={crop?.category}
            description={crop?.description}
          />
          <QuickInfo crop={crop} />
          <PDB
            pests={crop?.pests}
            diseases={crop?.diseases}
            beneficial={crop?.beneficial}
          />
          <Benefits benefits={t(crop?.benefits ?? '')} />
          <Fertilizers
            fertilizers={t(crop?.fertilizers ?? '', { returnObjects: true })}
          />
          <Uses uses={t(crop?.uses ?? '', { returnObjects: true })} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
