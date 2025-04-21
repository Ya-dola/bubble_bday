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

function Slide({ img }: { img: Item; idx: number }) {
  const [errored, setErrored] = useState(false);
  const raw = img.src ? img.src.replace(/^\/+/, '') : '';
  const srcPath = raw ? `${BASE}${raw}` : '';
  if (!img.src || errored) {
    return (
      <div className='bg-rose-100 h-90 flex flex-col items-center justify-center gap-2'>
        <p className='text-slate-600 font-comic2 text-2xl tracking-widest'>
          Coming Soon...
        </p>
        <p className='text-slate-600 font-comic2 text-xl tracking-widest'>
          Still drawing this for you
        </p>
      </div>
    );
  }
  return (
    <img
      src={srcPath}
      alt={img.caption}
      className='h-90 w-full object-contain'
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
    autoplaySpeed: 20000,
    arrows: false,
    pauseOnHover: true,
    beforeChange(_, nextSlide: number) {
      setCurrentSlide(nextSlide);
    },
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
        <span className='mt-2.25 w-5 h-5 block bg-rose-400 rounded' />
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
          particleCount={400}
          spreadDeg={18}
          shapeSize={18}
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
      <div
        className='px-3 py-5 bg-rose-200 shadow-[0_0_16px_rgba(251,113,133,0.5)]
       rounded-2xl h-fit bg-opacity-50'
      >
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
      <div
        className='mt-3 py-2 px-3 bg-rose-200 shadow-[0_0_16px_rgba(251,113,133,0.5)]
      rounded-2xl flex-col justify-between items-center text-left backdrop-blur-xl 
      bg-opacity-50'
      >
        <>
          <p className='font-comic text-slate-600 font-semibold text-md whitespace-pre-line'>
            {(images as Item[])[currentSlide].caption}
          </p>
          <div className='text-slate-600 w-full text-right text-sm font-comic2 tracking-widest mt-1.5'>
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
    </div>
  );
}
