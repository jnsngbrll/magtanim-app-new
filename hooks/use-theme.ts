import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeWindStyleSheet } from 'nativewind';
import { ColorSchemeSystem } from 'nativewind/dist/style-sheet/color-scheme';

interface UseThemeProps {
  theme: string;
  toggleTheme: () => void;
  loadTheme: () => void;
}

export const useTheme = create<UseThemeProps>((set, get) => ({
  theme: 'light',
  toggleTheme: async () => {
    try {
      const { theme } = get();
      const newTheme = theme === 'light' ? 'dark' : 'light';

      set({ theme: newTheme });
      NativeWindStyleSheet.setColorScheme(newTheme);

      await AsyncStorage.setItem('appTheme', newTheme);
    } catch (error) {
      console.error('Failed to update theme:', error);
    }
  },
  loadTheme: async () => {
    try {
      const savedTheme = await AsyncStorage.getItem('appTheme');

      const themeToSet = savedTheme ? savedTheme : 'light';

      set({ theme: themeToSet });
      NativeWindStyleSheet.setColorScheme(themeToSet as ColorSchemeSystem);
    } catch (error) {
      console.error('Failed to load theme:', error);
    }
  },
}));
