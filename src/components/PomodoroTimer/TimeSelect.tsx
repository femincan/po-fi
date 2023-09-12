import { useEffect } from 'react';
import { usePomodoroStore } from '@src/app/usePomodoroStore';
import { icons } from '@src/assets';

export const TimeSelect = () => {
  const { ArrowBack, ArrowForward } = icons;

  const sessionTime = usePomodoroStore((state) => state.sessionTime);
  const updateSessionTime = usePomodoroStore(
    (state) => state.updateSessionTime,
  );
  const breakTime = usePomodoroStore((state) => state.breakTime);
  const updateBreakTime = usePomodoroStore((state) => state.updateBreakTime);
  const isPlaying = usePomodoroStore((state) => state.isPlaying);
  const updateRemainingTime = usePomodoroStore(
    (state) => state.updateRemainingTime,
  );

  useEffect(() => {
    updateRemainingTime(sessionTime * 60);
  }, [sessionTime]);

  return (
    <div className='flex items-center justify-center gap-5 text-center sm:gap-8'>
      <div className='flex flex-col items-stretch justify-center gap-2 sm:gap-3'>
        <p id='session-label' className='text-base sm:text-lg'>
          Session Length
        </p>
        <div className='flex items-center justify-center gap-2.5'>
          <button
            onClick={() => updateSessionTime(sessionTime - 1)}
            disabled={isPlaying}
            type='button'
            id='session-decrement'
            className='
            rounded-full border border-white hover:bg-slate-700 [&_*]:fill-white'
          >
            <ArrowBack />
          </button>
          <p
            id='session-length'
            className='basis-1/4 text-lg font-medium sm:text-xl'
          >
            {sessionTime}
          </p>
          <button
            onClick={() => updateSessionTime(sessionTime + 1)}
            disabled={isPlaying}
            type='button'
            id='session-increment'
            className='
            rounded-full border border-white hover:bg-slate-700 [&_*]:fill-white'
          >
            <ArrowForward />
          </button>
        </div>
      </div>
      <div className='flex flex-col items-stretch justify-center gap-2 sm:gap-3'>
        <p id='break-label' className='text-base sm:text-lg'>
          Break Length
        </p>
        <div className='flex items-center justify-center gap-2.5'>
          <button
            onClick={() => updateBreakTime(breakTime - 1)}
            disabled={isPlaying}
            type='button'
            id='break-decrement'
            className='rounded-full border border-white hover:bg-slate-700 [&_*]:fill-white'
          >
            <ArrowBack />
          </button>
          <p
            id='break-length'
            className='basis-1/4 text-lg font-medium sm:text-xl'
          >
            {breakTime}
          </p>
          <button
            onClick={() => updateBreakTime(breakTime + 1)}
            disabled={isPlaying}
            type='button'
            id='break-increment'
            className=' rounded-full border border-white hover:bg-slate-700 [&_*]:fill-white'
          >
            <ArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};
