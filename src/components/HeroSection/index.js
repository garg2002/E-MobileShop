import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function App() {
  const slides = [
    {
      url: 'https://m.media-amazon.com/images/G/31/img23/Wireless/Samsung/SamsungM/M34-5G/16thNov/D85723568_INWLD-WLD-Samsung-M34-NewLaunch_catpage_1400x800._CB572949606_.jpg',
    },
    {
      url: 'https://m.media-amazon.com/images/G/31/img23/Wireless/nbshagun/BAU/CatHero/D75734134_WLD_OnePlus_Larry_NewLaunch_1400x800._CB574376854_.jpg',
    },
    {
      url: 'https://m.media-amazon.com/images/G/31/img23/Wireless/Xiaomi/RedmiA2/GW/Nov/D103348663_INWLD_RedmiA2_BAU_catpage_1400x800._CB572867097_.jpg',
    },

    {
      url: 'https://m.media-amazon.com/images/G/31/img21/Wireless/TECNOTILESPHASE3/D103625488_ITEL_P55_GW_BAU23_catpage_1400x800._CB574387163_.jpg',
    },
    {
      url: 'https://m.media-amazon.com/images/G/31/img22/Wireless/Meghana/Ka/iQOO12/D103643090_WLD_BAU_iQOO_12_5G_New_Launch_catpage_1400x800._CB574596174_.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[1400px] h-[600px]  m-auto  py-7 px-10 relative group hidden lg:block'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;