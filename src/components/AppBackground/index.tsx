import { useBackground } from '@src/hooks';
import { PropsWithChildren } from 'react';
import { BackgroundCredit } from './BackgroundCredit';
import { BackgroundSelect } from './BackgroundSelect';

export const AppBackground = ({ children }: PropsWithChildren) => {
  const { currentBg } = useBackground();

  return (
    <div className='h-full w-full overflow-y-auto'>
      <div className='flex min-h-full w-full flex-col gap-20 px-3 py-10'>
        {children}
        <div
          style={{
            backgroundImage: `url(${currentBg.src})`,
          }}
          className='absolute left-0 top-0 -z-10 h-full w-full bg-black/25 bg-cover bg-fixed bg-center bg-blend-darken'
        />
        <div className='flex flex-col items-center justify-center'>
          <BackgroundSelect />
          <BackgroundCredit />
        </div>
      </div>
    </div>
  );
};
