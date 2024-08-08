import React, { useState, useEffect } from 'react';
import BG1 from '../assets/BG.png';
import BG2 from '../assets/BG2.png';
import BG3 from '../assets/BG3.png';
import cap1 from '../assets/cap1.png';
import cap2 from '../assets/cap2.png';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { src: BG1, alt: 'First slide', label: 'Capacitors For Fans', caption: 'Some representative placeholder content for the first slide.' },
    { src: BG2, alt: 'Second slide', label: 'Capacitors For AC', caption: 'Some representative placeholder content for the second slide.' },
    { src: BG3, alt: 'Third slide', label: 'Capacitors For Lights', caption: 'Some representative placeholder content for the third slide.' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative overflow-hidden">
      <div className="flex transition-transform ease-in-out duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full flex-shrink-0 relative h-64 md:h-96 m-0">
            <img src={slide.src} alt={slide.alt} className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white">
              {/* <div className="text-center px-4">
                <h2 className="text-xl md:text-3xl">{slide.label}</h2>
                <p className="text-sm md:text-lg">{slide.caption}</p>
                <div className="flex justify-center mt-4 space-x-4">
                  <img src={cap1} alt="Capacitor 1" className="w-20 h-20 md:w-40 md:h-40" />
                  <img src={cap2} alt="Capacitor 2" className="w-16 h-16 md:w-32 md:h-32" />
                </div>
              </div> */}
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 hover:bg-opacity-75">
        &#10094;
      </button>
      <button onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 hover:bg-opacity-75">
        &#10095;
      </button>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <span key={index} className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-black' : 'bg-white'} cursor-pointer`} onClick={() => setCurrentIndex(index)}></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
