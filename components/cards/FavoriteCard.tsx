import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { useTranslation } from 'react-i18next';

import { useFavorites } from '@/hooks/use-favorites';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

interface IFavoriteCardProps {
  id: string;
  background: string;
  icon: string;
  name: string;
  scientificName: string;
}

const FavoriteCard: React.FC<IFavoriteCardProps> = ({
  id,
  background,
  icon,
  name,
  scientificName,
}) => {
  const removeFromFavorites = useFavorites(
    (state) => state.removeFromFavorites
  );

  const { t } = useTranslation();

  const formattedName = t(name.replace(' ', ''));

  return (
    <Link
      href={{
        pathname: '/crop-information/[cropID]',
        params: { cropID: id },
      }}
      asChild
    >
      <TouchableOpacity className="w-full rounded-xl overflow-hidden relative">
        <Image source={background} contentFit="cover" className="w-full h-40" />
        <TouchableOpacity
          onPress={() => removeFromFavorites(id)}
          className="absolute top-2 right-2"
        >
          <MaterialCommunityIcons
            name="heart-minus"
            size={25}
            color="#C0392B"
          />
        </TouchableOpacity>
        <View className="absolute left-2 bottom-2 flex-row gap-x-2">
          <View className="p-1 bg-white dark:bg-accent-default rounded-md">
            <Image source={icon} transition={500} className="w-10 h-10" />
          </View>
          <View>
            <Text className="text-lg font-medium text-white">
              {formattedName}
            </Text>
            <Text className="text-white italic -mt-1">{scientificName}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default FavoriteCard;
