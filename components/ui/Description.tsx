import React from 'react';
import { Text } from 'react-native';
import { useTranslation } from 'react-i18next';

interface IDescription {
  text: string | undefined | string[];
}

const Description: React.FC<IDescription> = ({ text }) => {
  const { t } = useTranslation();

  return (
    <Text className="text-[16px] text-black dark:text-white">
      {t(text ?? '')}
    </Text>
  );
};

export default Description;
