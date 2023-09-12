import { RefObject, useEffect } from 'react';
import { audios } from '@src/assets';
import { usePomodoroStore } from '@src/app/usePomodoroStore';

export const Audio = ({
  audioRef,
}: {
  audioRef: RefObject<HTMLAudioElement>;
}) => {
  const remainingTime = usePomodoroStore((state) => state.remainingTime);

  const { AlarmSound } = audios;

  useEffect(() => {
    if (audioRef.current && remainingTime === 0) {
      audioRef.current.play();
    }
  }, [remainingTime]);

  return (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <audio ref={audioRef} id='beep' src={AlarmSound} />
  );
};
