import { usePomodoroStore } from '@src/app/usePomodoroStore';

const parseTime = (timeInSeconds: number) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds - minutes * 60;

  const addPadToTime = (time: number) =>
    time.toString().length === 1 ? `0${time}` : time;

  return `${addPadToTime(minutes)}:${addPadToTime(seconds)}`;
};

export const Timer = () => {
  const remainingTime = usePomodoroStore((state) => state.remainingTime);
  const isSession = usePomodoroStore((state) => state.isSession);

  const normalizedRemainingTime = parseTime(remainingTime);

  return (
    <div className='flex flex-col items-center justify-center gap-1'>
      <p id='timer-label' className='text-base sm:text-xl'>
        {isSession ? 'Session' : 'Break'}
      </p>
      <p id='time-left' className='text-4xl font-bold sm:text-7xl'>
        {normalizedRemainingTime}
      </p>
    </div>
  );
};
