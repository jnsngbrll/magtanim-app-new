import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import { View, ScrollView, Image, FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';

import Header from '@/components/ui/Header';
import crops from '@/constants/crops';
import Title from '@/components/ui/Title';
import species from '@/constants/species';
import AffectedCard from '@/components/cards/AffectedCard';
import Description from '@/components/ui/Description';

export default function SpeciesInformation() {
  const { speciesID } = useLocalSearchParams();
  const { t } = useTranslation();

  const affectedCrops = crops.filter((crop) => {
    const hasPest = crop.pests.some((pest) => pest.id === speciesID);
    const hasDisease = crop.diseases.some(
      (disease) => disease.id === speciesID
    );
    const hasBeneficial = crop.beneficial.some(
      (beneficial) => beneficial.id === speciesID
    );

    return hasPest || hasDisease || hasBeneficial;
  });

  const sortedAffectedCrops = affectedCrops.sort((a, b) =>
    t(a.name.replaceAll(' ', '')).localeCompare(t(b.name.replaceAll(' ', '')))
  );

  const currentSpecies = species.find((species) => species.id === speciesID);
  if (!currentSpecies) return null;

  const isPest = currentSpecies?.collections === 'Pests';
  const isDisease = currentSpecies?.collections === 'Diseases';
  const isBeneficial = currentSpecies?.collections === 'Beneficial';

  return (
    <SafeAreaView className="flex-1 bg-secondary-100 dark:bg-accent-200">
      <View className="h-full pb-2 px-4 space-y-4">
        <Header title={currentSpecies.name as string} />
        <ScrollView className="space-y-4" showsVerticalScrollIndicator={false}>
          <Image
            source={currentSpecies?.image}
            height={50}
            width={50}
            className="h-52 w-full rounded-xl overflow-hidden"
          />
          <View>
            <Title text="affectedCrops" fontSize="xl" />
            <FlatList
              horizontal
              contentContainerStyle={{ marginTop: 4 }}
              data={sortedAffectedCrops}
              renderItem={({ item }) => (
                <AffectedCard
                  id={item.id}
                  background={item.background}
                  icon={item.icon}
                  name={item.name}
                  scientificName={item.scientificName}
                />
              )}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <View className="w-2"></View>}
              ListEmptyComponent={() => (
                <Description text="noAffectedCropsFound" />
              )}
            />
          </View>
          <View>
            <Title text="identification" fontSize="xl" />
            <Description text={currentSpecies?.identification} />
          </View>
          {isPest && (
            <View className="space-y-4">
              <View>
                <Title text="damage" fontSize="xl" />
                <Description text={currentSpecies.damage} />
              </View>
              <View>
                <Title text="physicalControl" fontSize="xl" />
                <Description text={currentSpecies?.physicalControl} />
              </View>
            </View>
          )}
          {isDisease && (
            <View>
              <Title text="physicalControl" fontSize="xl" />
              <Description text={currentSpecies?.physicalControl} />
            </View>
          )}
          {isBeneficial && (
            <View>
              <Title text="benefits" fontSize="xl" />
              <Description text={currentSpecies?.benefits} />
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
