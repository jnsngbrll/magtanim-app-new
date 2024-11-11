import React from 'react';
import { Text } from 'react-native';
import { useTranslation } from 'react-i18next';

interface TitleProps {
  text: string;
  fontSize: string;
}

const Title: React.FC<TitleProps> = ({ text, fontSize }) => {
  const { t } = useTranslation();
  const formattedText = t(text);

  return (
    <Text className={`text-${fontSize} font-medium text-secondary-200`}>
      {formattedText}
    </Text>
  );
};

export default Title;
