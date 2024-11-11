import { create } from 'zustand';

interface ISearchInput {
  searchInput: string;
  updateSearchInput: (searchInput: string) => void;
}

export const useSearchInput = create<ISearchInput>((set) => ({
  searchInput: '',
  updateSearchInput: (searchInput) => set({ searchInput }),
}));
