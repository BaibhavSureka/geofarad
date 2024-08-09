import React from 'react';

const CarouselContent = ({ label, big_img, small_img, caption }) => {
  return (
    <div className="relative w-full h-full p-12 sm:p-16 flex flex-col justify-between">
      {/* Text Section */}
      <div className=" flex flex-col items-start text-left mb-12 sm:mb-0">
        <header className="text-white font-bold text-2xl sm:text-4xl mb-4">
          {label}
        </header>
        <p className="text-white text-lg sm:text-xl mb-6">
          {caption}
        </p>
        <button className="bg-white text-gray-800 px-6 py-3 rounded w-auto text-lg hover:bg-gray-200">
          Explore Now
        </button>
      </div>
      
      {/* Image Section */}
      <div className="flex items-end justify-end mb-4 space-x-4">
        <img
          src={big_img}
          alt="Big"
          className="h-32 md:h-64 lg:h-96 md:w-auto rounded-lg"
        />
        <img
          src={small_img}
          alt="Small"
          className="h-24 md:h-48 lg:h-80 md:w-auto rounded-lg"
        />
        <div className='absolute right-0 -bottom-30 bg-white h-24 md:h-48 lg:h-80 w-10 rounded-lg' style={{ transform: 'translateX(10%)' }}></div>
        
      </div>
    </div>
  );
};

export default CarouselContent;
