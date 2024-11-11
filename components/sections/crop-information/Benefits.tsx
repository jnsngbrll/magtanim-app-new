import React from 'react';
import { View } from 'react-native';

import Title from '@/components/ui/Title';
import Description from '@/components/ui/Description';

interface BenefitsProps {
  benefits: string;
}

const Benefits: React.FC<BenefitsProps> = ({ benefits }) => {
  return (
    <View className="pt-4">
      <Title text="benefits" fontSize="xl" />
      <Description text={benefits || 'noBenefitsFound'} />
    </View>
  );
};

export default Benefits;
