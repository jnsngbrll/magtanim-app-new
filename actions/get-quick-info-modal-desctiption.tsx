const getQuickInfoModalDescription = (
  title: string,
  value: string,
  crop: any,
  t: Function
) => {
  const cropName = t(crop?.name.replaceAll(' ', '') ?? '').toLowerCase();
  const season =
    crop?.quickInfo.find((qi: any) => qi.title === 'Season')?.value || 'N/A';

  const descriptionKeys: Record<string, string> = {
    Spacing: 'spacingDesc',
    Depth: 'depthDesc',
    'Seed per pit': 'seedPerPit',
    Trellis: 'trellisDesc',
    Water: 'waterDesc',
    Sun: 'sunDesc',
    Height: 'heightDesc',
    Season:
      season !== 'Perennial' && season !== 'Matagalan'
        ? 'seasonDesc'
        : 'perennialSeasonDesc',
    Germination: 'germinationDesc',
    'Sprout to harvest': 'sproutToHarvestDesc',
  };

  const replaceUnits = (val: string, units: string[]) =>
    units.reduce(
      (acc, unit) => acc.replace(unit, t(unit.replace(' ', ''))),
      val
    );

  return t(descriptionKeys[title], {
    cropName,
    cropSpacing: replaceUnits(value, ['inches', 'inch']),
    cropDepth: replaceUnits(value, ['inches', 'inch']),
    cropTrellis: replaceUnits(value, ['inches', 'inch']),
    cropSeedPerPit: replaceUnits(value, ['seeds', 'seed']),
    cropWater: replaceUnits(value, ['inches', 'inch']),
    cropSun: replaceUnits(value, ['Full sun', 'Shade']),
    cropHeight: replaceUnits(value, ['inches', 'inch']),
    cropSeason: replaceUnits(value, ['Cool', 'Warm']).toLowerCase(),
    cropGermination: replaceUnits(value, ['days']),
    cropSproutToHarvest: replaceUnits(value, ['days']),
  });
};

export default getQuickInfoModalDescription;
