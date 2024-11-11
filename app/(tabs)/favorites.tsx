import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, View } from 'react-native';

import { useFavorites } from '@/hooks/use-favorites';

import Header from '@/components/ui/Header';
import FavoriteCard from '@/components/cards/FavoriteCard';
import Description from '@/components/ui/Description';

export default function Favorites() {
  const favorites = useFavorites((state) => state.favorites);

  return (
    <SafeAreaView className="flex-1 bg-secondary-100 dark:bg-accent-200">
      <View className="h-full pb-16">
        <Header title="Favorite" />
        <View className="mt-4">
          <FlatList
            data={favorites}
            numColumns={1}
            renderItem={({ item }) => (
              <FavoriteCard
                id={item.id}
                background={item.background}
                icon={item.icon}
                name={item.name}
                scientificName={item.scientificName}
              />
            )}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View className="h-2"></View>}
            ListEmptyComponent={
              <View className="items-center">
                <Description text={'noFavoritesYet'} />
              </View>
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
