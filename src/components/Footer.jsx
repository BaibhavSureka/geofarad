import React from 'react';
import { Divider } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Form from './Form';
const Footer = () => {
  return (
    <>
    <Form/>
    <div className='bg-[#161515] text-white text-center p-12 md:text-left'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 '>
          <div className='m-5 flex flex-col items-center'>
            <div className='flex space-x-4 mb-4'>
            <img src="/public/bbhjklopiu-1@2x.png" alt="Image 1" className="w-64 xl:w-96 lg:w-80 md:w-64 sm:w-48 xs:w-32" />
            </div>
            

            <div className='flex flex-col items-center md:items-start mb-4'>
    <p className='text-lg mb-2'>Plot-108 Sector 59, NOIDA, Uttar Pradesh, <br />India, PIN-201301</p>
    <p className='text-lg mb-2'>Phone: +9871575571</p>
    <p className='text-lg'>Email: info@example.com</p>
  </div>
  <div className='flex space-x-4 md:justify-start md:w-full'>
              <a href=''>
                <FacebookOutlinedIcon fontSize='large' className='transition duration-300 ease-in-out transform hover:scale-125' style={{ color: '#FFFFFF' }} />
              </a>
              <a href=''>
      <TwitterIcon fontSize='large' className='transition duration-300 ease-in-out transform hover:scale-125' style={{ color: '#FFFFFF' }} />
      </a>
              <a href=''>
                <InstagramIcon fontSize='large' className='transition duration-300 ease-in-out transform hover:scale-125' style={{ color: '#FFFFFF' }} />
              </a>
              <a href=''>
                <LinkedInIcon fontSize='large' className='transition duration-300 ease-in-out transform hover:scale-125' style={{ color: '#FFFFFF' }} />
              </a>

            </div>
          </div>
          <div className='flex flex-col md:flex-row mt-10 lg:flex-nowrap flex-wrap' >
  <div className='flex-1 min-w-[200px] m-5'>
    <h3 className='text-2xl font-bold'>Education</h3>
    <ul className='mt-6 text-sm md:text-base '>
      <li className='pb-3 hover:text-[#FE5E15] hover:underline'><a href='/'>Home</a></li>
      <li className='pb-3 hover:text-[#FE5E15] hover:underline'><a href='/aboutus'>About us</a></li>
      <li className='pb-3 hover:text-[#FE5E15] hover:underline'><a href='/products'>Products</a></li>
      <li className='pb-3 hover:text-[#FE5E15] hover:underline'><a href='/aboutus'>Our Team</a></li>
    </ul>
  </div>
  <div className='flex-1 min-w-[200px] m-5'>
    <h3 className='text-2xl font-bold'>Business</h3>
    <ul className='mt-6 text-sm md:text-base '>
      <li className='pb-3 hover:text-[#FE5E15] hover:underline'><a href='/contactus'>Contact Us</a></li>
      <li className='pb-3 hover:text-[#FE5E15] hover:underline'><a href='/faqs'>Faqs</a></li>
      <li className='pb-3 hover:text-[#FE5E15] hover:underline'><a href='/blogs'>Blogs</a></li>
    </ul>
  </div>
  <div className='flex-1 min-w-[200px] m-5'>
    <h3 className='text-2xl font-bold'>Developer & IT</h3>
    <ul className='mt-6 text-sm md:text-base '>
      <li className='pb-3 hover:text-[#FE5E15] hover:underline transition-all duration-300'><a href='/coatedabrasives'>Coated Abrasives</a></li>
      <li className='pb-3 hover:text-[#FE5E15] hover:underline'><a href='/diamondcuttingblades'>Diamond Cutting Blades</a></li>
      <li className='pb-3 hover:text-[#FE5E15] hover:underline'><a href='/steelgrindingdisc'>Steel & Grinding Disc</a></li>
      <li className='pb-3 hover:text-[#FE5E15] hover:underline'><a href='/flapdisc'>Flap Disc</a></li>
    </ul>
  </div>
  <div className='flex-1 min-w-[200px] m-5'>
    <h3 className='text-2xl font-bold'>Company</h3>
    <ul className='mt-6 text-sm md:text-base'>
      <li className='pb-3 hover:text-[#FE5E15] hover:underline transition-all duration-300'><a href='/coatedabrasives'>Coated Abrasives</a></li>
      <li className='pb-3 hover:text-[#FE5E15] hover:underline'><a href='/diamondcuttingblades'>Diamond Cutting Blades</a></li>
      <li className='pb-3 hover:text-[#FE5E15] hover:underline'><a href='/steelgrindingdisc'>Steel & Grinding Disc</a></li>
      <li className='pb-3 hover:text-[#FE5E15] hover:underline'><a href='/flapdisc'>Flap Disc</a></li>
    </ul>
  </div>
</div>
        </div>
      </div>
    </div>
    <div className='bg-gray-200 py-6 md:py-8 lg:py-10 xl:py-12 text-center'>
  <p className='italic text-sm md:text-base lg:text-lg'>Made in India</p>
</div>

</>
  );
}

export default Footer;