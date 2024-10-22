import React from 'react';

const CarouselContent = ({ label, big_img, small_img, caption }) => {
  return (
    <div className="relative w-full h-full p-12 sm:p-16 flex justify-between items-center">
      {/* Text Section */}
      <div className="flex flex-col items-start text-left max-w-md">
        <header className="text-white font-bold text-4xl mb-4">
          {label}
        </header>
        <p className="text-white text-lg mb-6 leading-relaxed">
          {caption}
        </p>
        <button className="bg-red-500 text-white px-6 py-3 rounded text-lg hover:bg-red-600">
          Explore
        </button>
      </div>
      
      {/* Image Section */}
      <div className="flex items-center space-x-4">
        <img
          src={big_img}
          alt="Big Capacitor"
          className="h-48 md:h-64 lg:h-96 w-auto object-contain rounded-lg"
        />
        <div className="flex flex-col space-y-4">
          <img
            src={small_img}
            alt="Small Capacitor 1"
            className="h-24 md:h-32 lg:h-48 w-auto object-contain rounded-lg"
          />
          <img
            src={small_img}
            alt="Small Capacitor 2"
            className="h-24 md:h-32 lg:h-48 w-auto object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselContent;
