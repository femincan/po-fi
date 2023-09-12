import { create } from 'zustand';

export type PomodoroState = {
  sessionTime: number;
  breakTime: number;
  remainingTime: number;
  isPlaying: boolean;
  isSession: boolean;
};

export type PomodoroActions = {
  updateSessionTime: (updatedSessionTime: number) => void;
  updateBreakTime: (updatedBreakTime: number) => void;
  decreaseRemainingTimeByOne: () => void;
  updateRemainingTime: (updatedRemainingTime: number) => void;
  toggleIsPlaying: () => void;
  toggleIsSession: () => void;
  resetState: () => void;
};

export const defaultState: PomodoroState = {
  sessionTime: 25,
  breakTime: 5,
  remainingTime: 25 * 60,
  isPlaying: false,
  isSession: true,
};

const normalizeTime = (time: number) => {
  let normalizedTime = time;

  if (time < 1) {
    normalizedTime = 1;
  } else if (time > 60) {
    normalizedTime = 60;
  }

  return normalizedTime;
};

export const usePomodoroStore = create<PomodoroState & PomodoroActions>(
  (set) => ({
    ...defaultState,
    updateSessionTime: (updatedSessionTime) =>
      set(() => {
        const normalizedSessionTime = normalizeTime(updatedSessionTime);

        return { sessionTime: normalizedSessionTime };
      }),
    updateBreakTime: (updatedBreakTime) =>
      set(() => {
        const normalizedBreakTime = normalizeTime(updatedBreakTime);

        return {
          breakTime: normalizedBreakTime,
        };
      }),
    decreaseRemainingTimeByOne: () =>
      set(
        ({
          sessionTime,
          breakTime,
          remainingTime,
          isSession,
          toggleIsSession,
        }) => {
          let decreasedRemainingTime = remainingTime - 1;

          if (decreasedRemainingTime < 0) {
            decreasedRemainingTime = (isSession ? breakTime : sessionTime) * 60;
            toggleIsSession();
          }

          return { remainingTime: decreasedRemainingTime };
        },
      ),
    updateRemainingTime: (updatedRemainingTime) =>
      set(() => ({ remainingTime: updatedRemainingTime })),
    toggleIsPlaying: () =>
      set(({ isPlaying }) => ({
        isPlaying: !isPlaying,
      })),
    toggleIsSession: () =>
      set(({ isSession }) => ({
        isSession: !isSession,
      })),
    resetState: () => set(() => defaultState),
  }),
);
