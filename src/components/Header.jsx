import React from 'react';

function Header() {
  return (
    <div className="bg-red-500 text-white flex flex-wrap justify-evenly py-2">
      <div className='flex'>
      <img src="/public/envelope-2@2x.png" alt="" className='w-6 h-6 px-1'/>
      <p> customercare@vjcapacitors.com</p>
      </div>

      <div className='flex'>
      <img src="/public/marker-2@2x.png" alt="" className='w-6 h-6 px-1'/>
      <p> customercare@vjcapacitors.com</p>
      </div>
    </div>
  );
}

export default Header;
