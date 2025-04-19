import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import images from '../data/images.json';
import Confetti from 'react-confetti-boom';
import { useState } from 'react';

interface Item {
  src: string;
  caption: string;
}

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    afterChange: (index: number) => setCurrentSlide(index),
    customPaging: (i: number) => (
      <button className='w-6 h-6 rounded-full bg-gray-300 text-sm'>
        {i + 1}
      </button>
    ),
    dotsClass: 'slick-dots flex justify-center space-x-2 mt-4',
  };

  return (
    <div className='max-w-sm mx-auto mt-6 px-2 h-screen sm:h-[100svh]'>
      <div className='relative'>
        <div className='absolute inset-0 z-50 pointer-events-none'>
          <Confetti
            mode='boom'
            particleCount={150}
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
            spreadDeg={40}
            shapeSize={16}
            launchSpeed={1.5}
            deg={270}
          />
        </div>

        <Slider {...settings}>
          {(images as Item[]).map((img, idx) => (
            <div key={idx}>
              <div className='bg-gray-200 h-60 flex items-center justify-center text-gray-500'>
                {/* prototype placeholder */}
                Image {idx + 1}
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className='mt-4 p-4 bg-white shadow-xl rounded-2xl text-center'>
        <p className='text-gray-700 font-semibold'>
          {(images as Item[])[currentSlide].caption}
        </p>
      </div>
      <button
        onClick={() => window.location.reload()}
        className='my-6 bg-blue-500 text-white px-4 py-2 rounded-xl shadow-md z-50 w-full'
      >
        Open Welcome
      </button>
    </div>
  );
}
