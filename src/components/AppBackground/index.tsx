import { useBackground } from '@src/hooks';
import { PropsWithChildren } from 'react';

export const AppBackground = ({ children }: PropsWithChildren) => {
  const { currentBg } = useBackground();

  return (
    <div className='h-full w-full overflow-y-auto'>
      {children}
      <div
        style={{ backgroundImage: `url(${currentBg.src})` }}
        className='absolute left-0 top-0 -z-10 h-full w-full bg-cover bg-fixed bg-center'
      />
    </div>
  );
};
