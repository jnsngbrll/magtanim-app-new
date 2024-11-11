import React, { useCallback } from 'react';
import { View, Pressable, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import { router } from 'expo-router';

import { useCropsFilter, useCropQuickInfoFilter } from '@/hooks/use-filter';

import Title from '@/components/ui/Title';
import { cropsFilters, cropQuickInfofilters } from '@/constants/filters';
import Label from '@/components/ui/Label';
import getFilterIcon from '@/actions/get-filter-icon';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Filter() {
  const { acitveCropsFilter, setActiveCropsFilter } = useCropsFilter(
    (state) => ({
      acitveCropsFilter: state.acitveCropsFilter,
      setActiveCropsFilter: state.setActiveCropsFilter,
    })
  );
  const { cropQuickInfoFilterOptions, setCropQuickInfoFilterOption } =
    useCropQuickInfoFilter((state) => ({
      cropQuickInfoFilterOptions: state.cropQuickInfoFilterOptions,
      setCropQuickInfoFilterOption: state.setCropQuickInfoFilterOption,
    }));

  const onClose = () => {
    router.back();
  };

  const handleCropsFilterPress = useCallback(
    (key: string) => {
      setActiveCropsFilter(key);
      router.back();
    },
    [setActiveCropsFilter, router]
  );

  const handleCropQuickInfoFilterOptionsChange = useCallback(
    (key: string) => {
      setCropQuickInfoFilterOption(key);
    },
    [setCropQuickInfoFilterOption]
  );

  const iconSize = 25;
  const primaryColor = '#28B463';
  const secondaryColor = '#808080';

  return (
    <Pressable onPress={onClose} className="flex-1">
      <BlurView intensity={100} tint="dark" className="flex-1 relative">
        <Pressable
          onPress={(e) => e.stopPropagation()}
          className="absolute top-10 right-4 w-[70%] p-4 z-10 bg-white dark:bg-accent-default rounded-xl space-y-6"
        >
          <View className="space-y-2">
            {cropsFilters.map((cf) => (
              <TouchableOpacity
                key={cf.label}
                onPress={() => handleCropsFilterPress(cf.key)}
                className="flex-row items-center justify-between"
              >
                <View className="flex-row items-center">
                  <View className="mr-4">{getFilterIcon(cf.label)}</View>
                  <Label text={cf.label} />
                </View>
                <View>
                  {acitveCropsFilter === cf.key ? (
                    <MaterialCommunityIcons
                      name="radiobox-marked"
                      size={iconSize}
                      color={primaryColor}
                    />
                  ) : (
                    <MaterialCommunityIcons
                      name="radiobox-blank"
                      size={iconSize}
                      color={secondaryColor}
                    />
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>
          {cropQuickInfofilters.map((cqif) => (
            <View key={cqif.title}>
              <View className="w-full h-0.5 bg-secondary-100 dark:bg-accent-100 mb-4 rounded-full"></View>
              <View className="space-y-4">
                <Title text={cqif.title} fontSize="[16px]" />
                <View className="space-y-2">
                  {cqif.items.map((item) => (
                    <TouchableOpacity
                      key={item.key}
                      onPress={() =>
                        handleCropQuickInfoFilterOptionsChange(item.key)
                      }
                      className="flex-row items-center justify-between"
                    >
                      <View className="flex-row items-center">
                        <View className="mr-4">
                          {getFilterIcon(item.label)}
                        </View>
                        <Label text={item.label} />
                      </View>
                      <View>
                        {cropQuickInfoFilterOptions[item.key] ? (
                          <MaterialCommunityIcons
                            name="checkbox-marked"
                            size={iconSize}
                            color={primaryColor}
                          />
                        ) : (
                          <MaterialCommunityIcons
                            name="checkbox-blank-outline"
                            size={iconSize}
                            color={secondaryColor}
                          />
                        )}
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </View>
          ))}
        </Pressable>
      </BlurView>
    </Pressable>
  );
}
