import { create } from 'zustand';

interface ICategory {
  activeCategory: string;
  updateActiveCategory: (category: string) => void;
}

export const useCategory = create<ICategory>((set) => ({
  activeCategory: 'All',
  updateActiveCategory: (category) => set({ activeCategory: category }),
}));
