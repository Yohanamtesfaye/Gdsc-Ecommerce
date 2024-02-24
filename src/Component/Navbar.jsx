import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-gray-700 p-4 flex flex-wrap justify-between items-center'>
      <div className="flex items-center">
        {/* Empty space to push links to the right */}
      </div>
      <div className="flex-grow"></div>
      <div className='text-white flex items-center space-x-4 '>
        <Link to='/' className='mr-4'>Home</Link>
        <Link to='/shop' className='mr-4'>Shop</Link>
        <Link to='/cart'className='mr-4'>Cart</Link>
      </div>
    </div>
  );
};

export default Navbar;
