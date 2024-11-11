import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IFavorites {
  id: string;
  background: string;
  icon: string;
  name: string;
  scientificName: string;
}

interface FavoriteState {
  favorites: IFavorites[];
  loadFavorites: () => void;
  toggleFavorite: (crops: any, cropID: string | undefined) => void;
  removeFromFavorites: (cropID: string) => void;
}

export const useFavorites = create<FavoriteState>((set, get) => ({
  favorites: [],
  loadFavorites: async () => {
    try {
      const favoritesData = await AsyncStorage.getItem('favorites');
      if (favoritesData) {
        set({ favorites: JSON.parse(favoritesData) });
      }
    } catch (error) {
      console.error('Failed to load favorites:', error);
    }
  },
  toggleFavorite: async (crop, cropID: string | undefined) => {
    try {
      const { favorites } = get();
      const isFavorite = favorites.some((favorite) => favorite.id === cropID);

      let updatedFavorites: any;

      if (isFavorite) {
        updatedFavorites = favorites.filter(
          (favorite) => favorite.id !== cropID
        );
      } else {
        const newFavoriteCrop = crop;
        updatedFavorites = [...favorites, newFavoriteCrop];
      }
      set({ favorites: updatedFavorites });
      await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } catch (error) {
      console.error('Failed to toggle favorite:', error);
    }
  },
  removeFromFavorites: async (cropID) => {
    try {
      const { favorites } = get();

      const updatedFavorites = favorites.filter(
        (favorite) => favorite.id !== cropID
      );

      set({ favorites: updatedFavorites });
      await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } catch (error) {
      console.error('Failed to remove the item from favorites:', error);
    }
  },
}));
