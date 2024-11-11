import { create } from 'zustand';

interface IQInfoModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useQInfoModal = create<IQInfoModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
