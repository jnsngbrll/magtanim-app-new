import { create } from 'zustand';

interface CropFilterProps {
  acitveCropsFilter: string;
  setActiveCropsFilter: (key: string) => void;
}

interface CropQuickInfoFilterOptions {
  [key: string]: boolean;
  fullSun: boolean;
  shade: boolean;
  cool: boolean;
  warm: boolean;
  perennial: boolean;
  favorite: boolean;
}

interface UseCropQuickInfoFilterProps {
  cropQuickInfoFilterOptions: CropQuickInfoFilterOptions;
  setCropQuickInfoFilterOption: (key: string) => void;
}

export const useCropsFilter = create<CropFilterProps>((set) => ({
  acitveCropsFilter: 'all',
  setActiveCropsFilter: (key) => set({ acitveCropsFilter: key }),
}));

export const useCropQuickInfoFilter = create<UseCropQuickInfoFilterProps>(
  (set) => ({
    cropQuickInfoFilterOptions: {
      fullSun: false,
      shade: false,
      cool: false,
      warm: false,
      perennial: false,
      favorite: false,
    },
    setCropQuickInfoFilterOption: (key) =>
      set((state) => ({
        cropQuickInfoFilterOptions: {
          ...state.cropQuickInfoFilterOptions,
          [key]: !state.cropQuickInfoFilterOptions[key],
        },
      })),
  })
);
