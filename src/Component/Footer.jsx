import React from 'react';

const Footer = () => {
  return (
    <div className='flex flex-col sm:flex-row bg-gray-700 p-4 text-white items-center justify-between mt-12' >
      <div className="mb-2 sm:mb-0">
        <a href="" className='mr-4'>Twitter</a>
        <a href="" className='mr-4'>LinkedIn</a>
        <a href="" className='mr-4'>Telegram</a>
        <a href="" className='mr-4'>Instagram</a>
      </div>
      <div className='text-white text-center mb-2 sm:mb-0'>
        <p>GDSC E-Commerce Website 2024</p>
      </div>
      <div className="text-center">
        <p className="text-sm">Follow Us For more!</p>
      </div>
    </div>
  );
};

export default Footer;
