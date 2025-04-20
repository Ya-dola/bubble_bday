import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import images from '../data/images.json';
import Confetti from 'react-confetti-boom';
import { useState } from 'react';

const BASE = import.meta.env.BASE_URL;

interface Item {
  src?: string;
  caption: string;
  name: string;
  link?: string;
}

function Slide({ img, idx }: { img: Item; idx: number }) {
  const [errored, setErrored] = useState(false);
  const raw = img.src ? img.src.replace(/^\/+/, '') : '';
  const srcPath = raw ? `${BASE}${raw}` : '';
  if (!img.src || errored) {
    return (
      <div className='bg-gray-200 h-100 flex items-center justify-center text-gray-500'>
        Image {idx + 1}
      </div>
    );
  }
  return (
    <img
      src={srcPath}
      alt={img.caption}
      className='h-100 w-full object-contain'
      onError={() => setErrored(true)}
    />
  );
}

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    autoplay: true,
    // TODO - CHANGE TO LONGER
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: true,
    afterChange: (index: number) => setCurrentSlide(index),
    customPaging: (i: number) => {
      const img = (images as Item[])[i];
      const raw = img.src ? img.src.replace(/^\/+/, '') : '';
      const srcPath = raw ? `${BASE}${raw}` : '';
      return img.src ? (
        <img
          src={srcPath}
          alt={img.caption}
          className='w-10 h-10 object-contain rounded'
        />
      ) : (
        <span className='w-4 h-4 block bg-rose-400 rounded-full' />
      );
    },
  };

  return (
    <div className='relative flex flex-col gap-4 h-[100vh] max-w-sm mx-auto px-2 py-4'>
      <div className='absolute inset-0 z-100 pointer-events-none'>
        <Confetti
          mode={'boom'}
          x={0.45}
          y={0.86}
          particleCount={360}
          spreadDeg={18}
          shapeSize={16}
          launchSpeed={3.8}
          deg={270}
          colors={[
            '#ff577f',
            '#ff884b',
            '#ffd384',
            '#6a4c93',
            '#1982c4',
            '#8ac926',
            '#ffca3a',
            '#ff595e',
          ]}
        />
      </div>

      {/* Section 1 */}
      <div className='bg-rose-50 p-4 shadow-[0_0_16px_rgba(251,113,133,0.3)] rounded-2xl overflow-hidden h-fit'>
        <Slider {...settings}>
          {(images as Item[]).map((img, idx) => (
            <Slide
              key={idx}
              img={img}
              idx={idx}
            />
          ))}
        </Slider>
      </div>

      {/* Section 2 */}
      <div className='mt-4 py-2 px-3 bg-rose-50 shadow-[0_0_16px_rgba(251,113,133,0.3)] rounded-2xl flex-col justify-between items-center text-left'>
        <>
          <p className='font-comic text-gray-700 font-semibold'>
            {(images as Item[])[currentSlide].caption}
          </p>
          <div className='text-gray-500 w-full text-right'>
            {images[currentSlide].link ? (
              <a
                href={(images as Item[])[currentSlide].link}
                target='_blank'
                rel='noopener noreferrer'
                className='underline'
              >
                - {(images as Item[])[currentSlide].name}
              </a>
            ) : (
              <span>- {(images as Item[])[currentSlide].name}</span>
            )}
          </div>
        </>
      </div>

      {/* Section 3 */}
      <div className='mt-auto bg-white p-2 shadow-[0_0_16px_rgba(251,113,133,0.3)] rounded-2xl'>
        <button
          onClick={() => window.location.reload()}
          className='w-full bg-blue-500 text-white px-4 py-2 rounded-xl shadow-md'
        >
          Open Welcome
        </button>
      </div>
    </div>
  );
}
