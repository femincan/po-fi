import { useRef } from 'react';
import { Actions } from './Actions';
import { Audio } from './Audio';
import { TimeSelect } from './TimeSelect';
import { Timer } from './Timer';

export const PomodoroTimer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <div className='flex-1'>
      <div className='m-auto flex h-72 w-72 flex-col items-center justify-center gap-4 rounded-full border-4 border-zinc-200 bg-zinc-900/20 pt-5 backdrop-blur sm:h-96 sm:w-96 sm:gap-6'>
        <TimeSelect />
        <Timer />
        <Actions audioRef={audioRef} />
        <Audio audioRef={audioRef} />
      </div>
    </div>
  );
};
