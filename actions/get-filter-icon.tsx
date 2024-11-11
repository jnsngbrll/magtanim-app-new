import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const iconSize = 25;

const iconMapping: Record<string, { name: any; color: string }> = {
  All: { name: 'apps', color: '#28B463' },
  Favorite: { name: 'heart', color: '#C0392B' },
  'Not favorite': { name: 'heart-outline', color: '#1E1E1E' },
  'Full sun': { name: 'white-balance-sunny', color: '#FFCC33' },
  Shade: { name: 'umbrella-beach', color: '#FFCC3380' },
  Cool: { name: 'snowflake', color: '#1CA3EC' },
  Warm: { name: 'thermometer-high', color: '#FF7251' },
  Perennial: { name: 'sync', color: '#28B463' },
};

const getFilterIcon = (label: string) => {
  if (iconMapping[label]) {
    const { name, color } = iconMapping[label];
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

export default getFilterIcon;
