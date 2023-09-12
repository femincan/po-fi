import { useBackground } from '@src/hooks';

export const BackgroundCredit = () => {
  const { currentBg } = useBackground();
  return (
    <div className='flex items-center justify-center rounded-xl border-2 border-zinc-400 bg-zinc-800 px-5 py-3'>
      <p className='text-center'>
        <a href={currentBg.imageUrl} className='underline'>
          Background by {currentBg.author}
        </a>{' '}
        on Freepik
      </p>
    </div>
  );
};
