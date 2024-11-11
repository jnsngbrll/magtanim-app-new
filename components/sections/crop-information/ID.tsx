import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, Image } from 'react-native';

import Title from '@/components/ui/Title';
import Description from '@/components/ui/Description';

interface IDProps {
  background: any;
  category: string | undefined;
  description: string | undefined;
}

const ID: React.FC<IDProps> = ({ background, category, description }) => {
  const { t } = useTranslation();

  return (
    <View className="gap-y-2">
      <Image
        source={background}
        width={50}
        className="h-52 w-full rounded-xl overflow-hidden"
      />
      <View className="flex-row items-center">
        <Title text={t('category').concat(': ')} fontSize="[16px]" />
        <Text className="text-[16px] text-black dark:text-white">
          {t(category ?? '')}
        </Text>
      </View>
      <View>
        <Description text={description} />
      </View>
    </View>
  );
};

export default ID;
