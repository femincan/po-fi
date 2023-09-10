import { useState } from 'react';
import { Background, backgrounds } from '@src/constants';
import { useBackground } from '@src/hooks';
import { icons } from '@src/assets';

const BackgroundPreview = ({ background }: { background: Background }) => {
  const {
    currentBg: { id: currentBgId },
    changeCurrentBg,
  } = useBackground();

  return (
    <button
      onClick={() => changeCurrentBg(background.id)}
      type='button'
      className={`${
        currentBgId === background.id ? 'border-2 border-yellow-400' : ''
      } min-w-max overflow-hidden rounded-lg`}
    >
      <img
        src={background.src}
        alt={`${currentBgId} background preview`}
        className='aspect-[4/3] h-auto w-16'
        loading='eager'
      />
    </button>
  );
};

export const BackgroundSelect = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { ArrowBack, ArrowForward } = icons;
  const Arrow = isOpen ? ArrowBack : ArrowForward;

  return (
    <div
      className={`${
        isOpen ? 'w-80' : 'w-10'
      } m-auto mb-3 flex h-24 max-w-full items-center justify-center gap-4 rounded-xl border-2 border-zinc-400 bg-zinc-800 p-3 transition-[width] duration-300 ease-in sm:m-0 sm:mb-3`}
    >
      {isOpen ? (
        <div className='flex flex-1 items-center gap-2 overflow-x-auto py-2'>
          {backgrounds.map((background) => (
            <BackgroundPreview key={background.id} background={background} />
          ))}
        </div>
      ) : null}
      <button
        type='button'
        onClick={() => setIsOpen((value) => !value)}
        className='w-5'
      >
        <Arrow className='fill-current' />
      </button>
    </div>
  );
};
