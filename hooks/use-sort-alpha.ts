import { create } from 'zustand';

interface ISortAlpha {
  isSortAlpha: boolean;
  toggleSortAlpha: () => void;
}

export const useSortAlpha = create<ISortAlpha>((set) => ({
  isSortAlpha: false,
  toggleSortAlpha: () => set((state) => ({ isSortAlpha: !state.isSortAlpha })),
}));
