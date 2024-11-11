import React from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import Title from '@/components/ui/Title';
import GridView from '@/components/grids/GridView';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function PDB({ pests, diseases, beneficial }: any) {
  const { t } = useTranslation();

  const iconSize = 25;
  const iconColor = '#808080';

  return (
    <View className="pt-4 gap-y-4">
      <View>
        <View className="flex-row items-center">
          <View className="mr-4">
            <MaterialCommunityIcons
              name="ladybug"
              size={iconSize}
              color={iconColor}
            />
          </View>
          <Title text="Pests" fontSize="xl" />
        </View>
        <GridView numCols={3} gap={10} species={t('Pests')} data={pests} />
      </View>
      <View>
        <View className="flex-row items-center">
          <View className="mr-4">
            <MaterialCommunityIcons
              name="virus"
              size={iconSize}
              color={iconColor}
            />
          </View>
          <Title text="Diseases" fontSize="xl" />
        </View>
        <GridView
          numCols={3}
          gap={10}
          species={t('Diseases')}
          data={diseases}
        />
      </View>
      <View>
        <View className="flex-row items-center">
          <View className="mr-4">
            <MaterialCommunityIcons
              name="shield-bug"
              size={iconSize}
              color={iconColor}
            />
          </View>
          <Title text="Beneficial" fontSize="xl" />
        </View>
        <GridView
          numCols={3}
          gap={10}
          species={t('Beneficial')}
          data={beneficial}
        />
      </View>
    </View>
  );
}
