import React from 'react';
import { Text } from 'react-native';
import { useTranslation } from 'react-i18next';

interface LabelProps {
  text: string;
}

const Label: React.FC<LabelProps> = ({ text }) => {
  const { t } = useTranslation();
  const formattedText = t(text.replace(' ', ''));

  return (
    <Text className="text-[16px] text-black dark:text-white">
      {formattedText}
    </Text>
  );
};

export default Label;
