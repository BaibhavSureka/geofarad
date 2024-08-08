import React from 'react';
import FooterLogo from '../assets/FooterLogo.png'
function Footer() {
  return (
    <div className="bg-black">
        <div className='flex p-4'>
        <div>
      <img src={FooterLogo}></img>
      <div className='flex justify-center'>
      <div>
      <p className='text-white ' style={{fontSize:"14px",fontWeight:"200"}}>Plot-108  Sector 59, NOIDA, Uttar Pradesh,
India, PIN-201301</p>
<p className='text-white ' style={{fontSize:"14px",fontWeight:"200"}}>Phone: +9871575571</p>
<p className='text-white ' style={{fontSize:"14px",fontWeight:"200"}}>Email: info@example.com</p>
      </div>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Footer;
