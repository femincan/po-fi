import { RefObject, useEffect, useRef } from 'react';
import { usePomodoroStore } from '@src/app/usePomodoroStore';
import { icons } from '@src/assets';

export const Actions = ({
  audioRef,
}: {
  audioRef: RefObject<HTMLAudioElement>;
}) => {
  const decreaseRemainingTimeByOne = usePomodoroStore(
    (state) => state.decreaseRemainingTimeByOne,
  );
  const isPlaying = usePomodoroStore((state) => state.isPlaying);
  const toggleIsPlaying = usePomodoroStore((state) => state.toggleIsPlaying);
  const resetState = usePomodoroStore((state) => state.resetState);

  const { Play, Pause, Reset } = icons;
  const PlayPause = isPlaying ? Pause : Play;

  const intervalId = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (isPlaying) {
      intervalId.current = setInterval(() => {
        decreaseRemainingTimeByOne();
      }, 1000);
    } else {
      clearInterval(intervalId.current);
    }
  }, [isPlaying]);

  return (
    <div className='flex items-center justify-center gap-4'>
      <button
        onClick={toggleIsPlaying}
        type='button'
        id='start_stop'
        className='rounded-full border border-white p-1 hover:bg-slate-700'
        title={isPlaying ? 'Stop' : 'Start'}
      >
        <PlayPause className='fill-current' />
      </button>
      <button
        onClick={() => {
          if (audioRef.current) {
            audioRef.current.pause();
            // eslint-disable-next-line no-param-reassign
            audioRef.current.currentTime = 0;
          }
          resetState();
        }}
        type='button'
        id='reset'
        className='rounded-full border border-white p-1 hover:bg-slate-700'
        title='Reset'
      >
        <Reset className='fill-current' />
      </button>
    </div>
  );
};
