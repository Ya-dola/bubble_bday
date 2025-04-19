import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import Confetti from 'react-confetti-boom';

interface Props {
  onEnter(): void;
}

export default function WelcomeScreen({ onEnter }: Props) {
  const [blast, setBlast] = useState(false);

  const handleClick = () => {
    setBlast(true);
    onEnter();
  };

  return (
    <Dialog
      open
      onClose={handleClick}
      className='fixed inset-0 z-50'
    >
      <div className='fixed inset-0 bg-white flex items-center justify-center'>
        <button
          onClick={handleClick}
          className='px-8 py-4 bg-gray-200 rounded-xl text-lg font-medium'
        >
          Tap to Celebrate 🎉
        </button>
      </div>
      {blast && <Confetti particleCount={100} />}
    </Dialog>
  );
}
