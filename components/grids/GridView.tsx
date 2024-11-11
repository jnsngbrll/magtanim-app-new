import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import { useTranslation } from 'react-i18next';

import Description from '@/components/ui/Description';

interface GridViewProps {
  numCols: number;
  gap: number;
  data: any[];
  species: string;
}

const GridView: React.FC<GridViewProps> = ({ numCols, gap, species, data }) => {
  const { t } = useTranslation();

  const sortedData = data.sort((a, b) =>
    t(a.name.replaceAll(' ', '')).localeCompare(t(b.name.replaceAll(' ', '')))
  );

  return data?.length > 0 ? (
    <View className="pt-2 flex-row flex-wrap" style={{ margin: -gap / 2.2 }}>
      {sortedData.map((sd: any) => (
        <Link
          key={sd.id}
          href={{
            pathname:
              '/crop-information/species/species-information/[speciesID]',
            params: { speciesID: sd.id },
          }}
          asChild
        >
          <TouchableOpacity
            style={{
              width: `${100 / numCols}%`,
              padding: gap / 2,
            }}
          >
            <View>
              <Image source={sd.image} className="w-full h-24 rounded-t-md" />
            </View>
            <View className="bg-white dark:bg-accent-default p-2 rounded-b-md">
              <Text
                numberOfLines={1}
                className="text-black dark:text-white text-xs"
              >
                {t(sd.name.replaceAll(' ', ''))}
              </Text>
            </View>
          </TouchableOpacity>
        </Link>
      ))}
    </View>
  ) : (
    <Description
      text={t('noSpeciesFoundForThisCrop', {
        species: species.toLowerCase(),
      })}
    />
  );
};

export default GridView;
