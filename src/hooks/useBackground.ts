import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { backgrounds } from '@src/constants';

type BackgroundState = {
  currentBackground: (typeof backgrounds)[number];
  changeCurrentBg: (bgId: string) => void;
};

const useBackgroundStore = create<BackgroundState>()(
  persist(
    (set, get) => ({
      currentBackground: backgrounds[0],
      changeCurrentBg: (bgId) => {
        const background = backgrounds.find(({ id }) => id === bgId);

        if (background && background.id !== get().currentBackground.id) {
          return set({ currentBackground: background });
        }

        return get();
      },
    }),
    { name: 'background-preference' },
  ),
);

export const useBackground = () => {
  const currentBg = useBackgroundStore((state) => state.currentBackground);
  const changeCurrentBg = useBackgroundStore((state) => state.changeCurrentBg);

  return { currentBg, changeCurrentBg };
};
