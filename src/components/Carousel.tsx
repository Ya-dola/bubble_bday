import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import images from '../data/images.json';

interface Item {
  src: string;
  caption: string;
}

export default function Carousel() {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    customPaging: (i: number) => (
      <button className='w-6 h-6 rounded-full bg-gray-300 text-sm'>
        {i + 1}
      </button>
    ),
    dotsClass: 'slick-dots flex justify-center space-x-2 mt-4',
  };

  return (
    <div className='max-w-sm mx-auto mt-6 px-2'>
      <Slider {...settings}>
        {(images as Item[]).map((img, idx) => (
          <div key={idx}>
            <div className='bg-gray-200 h-60 flex items-center justify-center text-gray-500'>
              {/* prototype placeholder */}
              Image {idx + 1}
            </div>
            <div className='bg-white p-4 shadow-xl rounded-2xl mt-3'>
              <p className='text-center text-gray-700 font-semibold'>
                {img.caption}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
