import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const iconSize = 25;
const iconColor = '#7B7D7D';

const iconMapping: Record<string, { name: any }> = {
  Pests: { name: 'ladybug' },
  Diseases: { name: 'virus' },
  Beneficial: { name: 'shield-bug' },
  Settings: { name: 'cog' },
};

const getMoreIcon = (label: string) => {
  if (iconMapping[label]) {
    const { name } = iconMapping[label];
    return (
      <MaterialCommunityIcons name={name} size={iconSize} color={iconColor} />
    );
  }

  return (
    <MaterialCommunityIcons
      name="alert-circle-outline"
      size={iconSize}
      color="#C0392B"
    />
  );
};

export default getMoreIcon;
