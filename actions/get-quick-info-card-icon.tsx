import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const iconSize = 40;

const iconMapping: Record<string, { name: any; color: string }> = {
  Spacing: { name: 'format-text-wrapping-clip', color: '#478778' },
  Depth: { name: 'arrow-expand-down', color: '#926829' },
  'Seed per pit': { name: 'seed', color: '#61735A' },
  Trellis: { name: 'pound', color: '#808080' },
  Water: { name: 'watering-can', color: '#1CA3EC' },
  Height: { name: 'arrow-up-down', color: '#E3C783' },
  Germination: { name: 'sprout', color: '#28B463' },
  'Sprout to harvest': { name: 'calendar-check', color: '#808080' },
};

const sunMapping: Record<string, { name: any; color: string }> = {
  'Full sun': { name: 'white-balance-sunny', color: '#FFCC33' },
  Shade: { name: 'umbrella-beach', color: '#FFCC3380' },
};

const seasonMapping: Record<string, { name: any; color: string }> = {
  Cool: { name: 'snowflake', color: '#1CA3EC' },
  Warm: { name: 'thermometer-high', color: '#FF7251' },
  Perennial: { name: 'sync', color: '#28B463' },
};

const getQuickInfoCardIcon = (title: string, value: string) => {
  if (iconMapping[title]) {
    const { name, color } = iconMapping[title];
    return <MaterialCommunityIcons name={name} size={iconSize} color={color} />;
  }

  if (title === 'Sun' && sunMapping[value]) {
    const { name, color } = sunMapping[value];
    return <MaterialCommunityIcons name={name} size={iconSize} color={color} />;
  }

  if (title === 'Season' && seasonMapping[value]) {
    const { name, color } = seasonMapping[value];
    return <MaterialCommunityIcons name={name} size={iconSize} color={color} />;
  }

  return (
    <MaterialCommunityIcons
      name="alert-circle-outline"
      size={iconSize}
      color="#C0392B"
    />
  );
};

export default getQuickInfoCardIcon;
