import { create } from 'zustand';
import { backgrounds } from '@src/constants';

type BackgroundState = {
  currentBackground: (typeof backgrounds)[number];
  changeCurrentBg: (bgId: string) => void;
};

const useBackgroundStore = create<BackgroundState>((set) => ({
  currentBackground: backgrounds[4],
  changeCurrentBg: (bgId) =>
    set((state) => {
      const background = backgrounds.find(({ id }) => id === bgId);

      if (background && background.id !== state.currentBackground.id) {
        return { currentBackground: background };
      }

      return state;
    }),
}));

export const useBackground = () => {
  const currentBg = useBackgroundStore((state) => state.currentBackground);
  const changeCurrentBg = useBackgroundStore((state) => state.changeCurrentBg);

  return { currentBg, changeCurrentBg };
};
