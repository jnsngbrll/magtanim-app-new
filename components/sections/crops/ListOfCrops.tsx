import React from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { useTranslation } from 'react-i18next';

import Description from '@/components/ui/Description';

export default function ListOfCrops({ filteredCrops }: any) {
  const { t } = useTranslation();

  return (
    <View className="mt-2 h-screen items-center pb-[190px]">
      <FlatList
        data={filteredCrops}
        numColumns={2}
        renderItem={({ item }) => (
          <Link
            href={{
              pathname: '/crop-information/[cropID]',
              params: { cropID: item.id },
            }}
            asChild
          >
            <TouchableOpacity className="m-2 w-32 h-32 p-2 bg-white dark:bg-accent-default rounded-xl items-center justify-between">
              <View className="flex-1 items-center justify-center">
                <Image
                  source={item.icon}
                  transition={500}
                  className="h-20 w-20"
                />
              </View>
              <Text className="text-xs text-black dark:text-white">
                {t(item.name.replace(' ', ''))}
              </Text>
            </TouchableOpacity>
          </Link>
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<Description text={t('cropNotFound')} />}
      />
    </View>
  );
}
