import React from 'react';
import { View, Text } from 'react-native';

import Title from '@/components/ui/Title';
import Description from '@/components/ui/Description';

interface UsesProps {
  uses: string[];
}

const Uses: React.FC<UsesProps> = ({ uses }) => {
  return (
    <View className="pt-4">
      <Title text="uses" fontSize="xl" />
      <View className="space-y-2">
        {uses.length > 0 ? (
          uses?.map((uses: any, idx: number) => (
            <View key={idx} className="flex-row items-center gap-x-4">
              <View className="px-1 bg-white dark:bg-accent-default rounded-full">
                <Text className="text-xs text-black dark:text-white">
                  {idx + 1}
                </Text>
              </View>
              <View className="flex-shrink">
                <Description text={uses} />
              </View>
            </View>
          ))
        ) : (
          <Description text="noUsesFound" />
        )}
      </View>
    </View>
  );
};

export default Uses;
