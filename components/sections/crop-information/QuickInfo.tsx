import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Link } from 'expo-router';

import { useTheme } from '@/hooks/use-theme';

import getQuickInfoCardIcon from '@/actions/get-quick-info-card-icon';
import getQuickInfoModalDescription from '@/actions/get-quick-info-modal-desctiption';
import Title from '@/components/ui/Title';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

interface QuickInfoItem {
  title: string;
  value: string;
}

interface Crop {
  id: string;
  name: string;
  scientificName: string;
  icon: any;
  background: any;
  description: string;
  category: string;
  quickInfo: QuickInfoItem[];
}

interface QuickInfoProps {
  crop?: Crop;
}

const QuickInfo: React.FC<QuickInfoProps> = ({ crop }) => {
  const theme = useTheme((state) => state.theme);
  const { t } = useTranslation();
  const numCols = 3;
  const gap = 10;
  const exclamationColor = theme === 'light' ? 'black' : 'white';

  const formattedValue = (value: string) => {
    return (
      t(value)
        .replace(/inches?|inch/, 'in')
        .replace('seeds', t('seeds'))
        .replace('seed', t('seed'))
        .replace('Full sun', t('Fullsun'))
        .replace(/(Shade|Cool|Warm|week|days)/g, (match) => t(match)) || 'N/A'
    );
  };

  return (
    <View className="pt-4">
      <Title text="quickInfo" fontSize="xl" />
      <View className="pt-2 flex-row flex-wrap" style={{ margin: -gap / 2 }}>
        {crop?.quickInfo.map((qi: QuickInfoItem) => (
          <Link
            key={qi.title}
            href={{
              pathname: '/quickInfo',
              params: {
                title: t(qi.title.replaceAll(' ', '')),
                description: getQuickInfoModalDescription(
                  qi.title,
                  qi.value || 'N/A',
                  crop,
                  t
                ),
              },
            }}
            asChild
          >
            <TouchableOpacity
              className="p-2 items-center justify-between bg-white dark:bg-accent-default rounded-xl relative border-secondary-100 dark:border-accent-200"
              style={{ width: `${100 / numCols}%`, borderWidth: gap / 2 }}
            >
              <View className="absolute top-1 right-1">
                <MaterialCommunityIcons
                  name="alert-circle-outline"
                  size={18}
                  color={exclamationColor}
                />
              </View>
              <Text className="text-xs text-black dark:text-white text-center">
                {t(qi.title.replaceAll(' ', ''))}
              </Text>
              <View className="flex-row my-1 relative">
                {qi.title === 'Spacing' && (
                  <View className="absolute left-3 space-y-[9px]">
                    <Image source={crop?.icon} className="w-4 h-4" />
                    <Image source={crop?.icon} className="w-4 h-4" />
                  </View>
                )}
                <View>{getQuickInfoCardIcon(qi.title, qi.value)}</View>
              </View>
              <Text className="text-xs text-black dark:text-white">
                {formattedValue(qi.value)}
                {qi.title === 'Water' && qi.value !== ''
                  ? `/${t('week')}`
                  : null}
              </Text>
            </TouchableOpacity>
          </Link>
        ))}
      </View>
    </View>
  );
};

export default React.memo(QuickInfo);
