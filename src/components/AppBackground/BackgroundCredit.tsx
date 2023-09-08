import { useBackground } from '@src/hooks';

export const BackgroundCredit = () => {
  const { currentBg } = useBackground();
  return (
    <div className='m-auto flex h-12 w-72 items-center justify-center rounded-xl border-2 border-zinc-400 bg-zinc-800 sm:m-0'>
      <p className='text-center'>
        <a href={currentBg.imageUrl} className='underline'>
          Background by {currentBg.author}
        </a>{' '}
        on Freepik
      </p>
    </div>
  );
};
