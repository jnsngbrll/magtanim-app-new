import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  ImageSourcePropType,
} from 'react-native';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { useTranslation } from 'react-i18next';

interface IAffectedCardProps {
  id: string;
  background: ImageSourcePropType;
  icon: ImageSourcePropType;
  name: string;
  scientificName: string;
}

const AffectedCard: React.FC<IAffectedCardProps> = ({
  id,
  background,
  icon,
  name,
  scientificName,
}) => {
  const { t } = useTranslation();
  const formattedName = t(name.replace(' ', ''));

  return (
    <Link
      href={{ pathname: '/crop-information/[cropID]', params: { cropID: id } }}
      asChild
    >
      <TouchableOpacity className="w-60 rounded-xl overflow-hidden relative">
        <Image source={background} contentFit="cover" className="w-full h-32" />
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

export default AffectedCard;
