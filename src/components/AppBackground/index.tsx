import { useBackground } from '@src/hooks';
import { PropsWithChildren } from 'react';
import { BackgroundCredit } from './BackgroundCredit';
import { BackgroundSelect } from './BackgroundSelect';

export const AppBackground = ({ children }: PropsWithChildren) => {
  const { currentBg } = useBackground();

  return (
    <div className='h-full w-full overflow-y-auto'>
      <div className='h-full w-full p-5'>
        {children}
        <div
          style={{ backgroundImage: `url(${currentBg.src})` }}
          className='absolute left-0 top-0 -z-10 h-full w-full bg-cover bg-fixed bg-center'
        />
        <BackgroundSelect />
        <BackgroundCredit />
      </div>
    </div>
  );
};
