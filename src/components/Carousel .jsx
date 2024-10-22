import React, { useState, useEffect } from 'react';
import BG1 from '../assets/BG.png';
import BG2 from '../assets/BG2.png';
import BG3 from '../assets/BG3.png';
import cap1 from '../assets/cap1.png';
import cap2 from '../assets/cap2.png';
import cap3 from '../assets/cap3.png';
import CarouselContent from './CarouselContent';
import './Carousel.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { src: BG1, alt: 'First slide', label: 'Capacitors For Fans', big_img: cap1, small_img: cap2, caption: 'Trusted by professionals for consistent, reliable performance. Our fan capacitors ensure smooth, worry-free operation for years!' },
    { src: BG2, alt: 'Second slide', label: 'Capacitors For AC', big_img: cap2, small_img: cap3, caption: 'Reliable capacitors for air conditioners. Designed for enhanced performance and durability.' },
    { src: BG3, alt: 'Third slide', label: 'Capacitors For Lights', big_img: cap3, small_img: cap1, caption: 'Capacitors optimized for lighting solutions, ensuring longevity and stability for all your lighting needs.' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="w-screen h-screen carousel-container relative overflow-hidden">
      <div className="flex transition-transform ease-in-out duration-500"
        style={{ 
          transform: window.innerWidth < 600 
            ? `translateX(-${currentIndex * window.innerWidth}px)` 
            : `translateX(-${currentIndex * 100}%)` 
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-screen min-w-full flex-shrink-0 relative h-64 md:h-80 lg:h-96">
            <img src={slide.src} alt={slide.alt} className="w-screen h-screen carousel-item object-cover" />
            <div className="absolute inset-0 flex items-center justify-center text-white mt-40 lg:mt-20">
              <CarouselContent 
                label={slide.label}
                big_img={slide.big_img}
                small_img={slide.small_img}
                caption={slide.caption}
              />
            </div>
          </div>
        ))}
      </div>
      {/* Navigation dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 carousel-dots">
        {slides.map((_, index) => (
          <span key={index} className={`w-4 h-4 ${currentIndex === index ? 'bg-red-700' : 'bg-white'} cursor-pointer rounded-full`} onClick={() => setCurrentIndex(index)}></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
