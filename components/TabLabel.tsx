import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

interface TabLabelProps {
  focused: boolean;
  label: string;
}

const TabLabel: React.FC<TabLabelProps> = ({ focused, label }) => {
  const { t } = useTranslation();

  return (
    <View className="flex items-center h-full absolute -bottom-9">
      <Text
        style={{
          marginBottom: 8,
          fontSize: 12,
          color: focused ? '#28B463' : '#808080',
        }}
      >
        {t(label)}
      </Text>
    </View>
  );
};

export default TabLabel;
