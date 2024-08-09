import React from 'react';

const Form = () => {
  const handleSubmit = async (event) => {
    event.preventDefault(); 
    const formData = new FormData(event.target);

    try {
      const response = await fetch('https://your-backend-address.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log('success');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="contact-form w-screen max-w-full p-8 bg-gray-100 rounded-lg shadow-lg relative px-4">
      <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-left mb-6 text-red-500">
        Get in touch with us, <br/>we're here to assist you
      </h2>
      <form onSubmit={handleSubmit} className="p-4 mb-20 md:mb-12 lg:mb-8">
        {/* Flex container for larger screens */}
        <div className="flex flex-col lg:flex-row mb-6 gap-3">
          <div className="flex-1">
            <label htmlFor="name" className="block font-bold text-gray-600 mb-1 text-lg lg:text-xl xl:text-2xl">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border-b border-gray-300 bg-transparent focus:outline-none focus:border-red-500 text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="email" className="block font-bold text-gray-600 mb-1 text-lg lg:text-xl xl:text-2xl">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border-b border-gray-300 bg-transparent focus:outline-none focus:border-red-500 text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="phone" className="block font-bold text-gray-600 mb-1 text-lg lg:text-xl xl:text-2xl">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-2 border-b border-gray-300 bg-transparent focus:outline-none focus:border-red-500 text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl"
              required
            />
          </div>
        </div>

        {/* Query/Remarks field */}
        <div className="mb-6">
          <label htmlFor="query" className="block font-bold text-gray-600 mb-1 text-lg lg:text-xl xl:text-2xl">Query/Remarks</label>
          <textarea
            id="query"
            name="query"
            className="w-full px-4 py-2 border-b border-gray-300 bg-transparent focus:outline-none focus:border-red-500 resize-y text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl"
          ></textarea>
        </div>

        {/* Submit button */}
        <div className='xl:mt-20'>
          <button
            type="submit"
            className="bg-red-500 text-white font-bold text-lg py-3 px-12 rounded-full hover:bg-red-600 w-48 h-16 absolute left-4 bottom-4 lg:left-8 lg:bottom-8 lg:w-64 lg:h-20 lg:text-xl md:w-52 md:h-18 md:text-lg md:mx-auto md:bottom-4 sm:w-40 sm:h-14 sm:text-base sm:mx-auto sm:bottom-4"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
