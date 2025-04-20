import { Dialog } from '@headlessui/react';

interface Props {
  onEnter(): void;
}

export default function WelcomeScreen({ onEnter }: Props) {
  const handleClick = () => {
    onEnter();
  };

  return (
    <Dialog
      open
      onClose={handleClick}
      className='fixed inset-0 z-50'
    >
      <div
        onClick={handleClick}
        className='flex flex-col justify-center items-center
         bg-white cursor-pointer gap-24 h-screen'
      >
        <div
          className='bg-opacity-50 px-8 py-4 rounded-xl
        bg-rose-300 shadow-[0_0_24px_rgba(251,113,133,0.8)]'
        >
          <p className='font-comic2 text-2xl text-slate-600 tracking-wider text-center'>
            Happy Birthday Sen &gt;.&lt;
          </p>
        </div>
        <div
          className='bg-opacity-5 px-8 py-4 
        rounded-xl bg-orange-300 shadow-[0_0_24px_rgba(253,186,116,0.8)]'
        >
          <p className='font-comic2 text-xl text-slate-600 tracking-wider text-center'>
            Let's Duel Comrade!!!
          </p>
          <p className='font-comic2 text-sm text-slate-600 tracking-wide text-center'>
            (Tap Screen)
          </p>
        </div>
      </div>
    </Dialog>
  );
}
