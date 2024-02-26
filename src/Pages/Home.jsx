import React from 'react';
import img1 from '../Images/1.png';
import img2 from '../Images/2.png';
import img3 from '../Images/3.png';
import img4 from '../Images/4.png';
import img5 from '../Images/5.png';
import img6 from '../Images/6.webp';
import Footer from '../Component/Footer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className='text-5xl font-bold font-serif text-blue-500 mt-8 sm:mt-24 text-center'>E-commerce Website</h1> 
      <div className='flex justify-center items-center '>
        <h1 className='text-4xl font-bold font-serif sm:mt-10 text-center'>Categories</h1>
      </div>
      <div className='flex justify-center items-center'>
        <p className='pt-4 leading-loose text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />  eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <div className='flex justify-center items-center'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-14 rounded mt-5' onClick={()=>navigate("/shop")}>Start Shopping </button>
      </div>
      <div className='flex flex-wrap justify-center sm:ml-40 '>
        <img src={img1} className='mr-6 mb-6 sm:mb-0' style={{ width: '250px', height: '350px' }} />
        <img src={img4} className='mr-6 mb-6 sm:mb-0' style={{ width: '250px', height: '350px' }} />
        <img src={img5} className='mr-6 mb-6 sm:mb-0' style={{ width: '250px', height: '350px' }} />
      </div>
      <div className='flex justify-center items-center'>
        <h1 className='text-4xl font-bold font-serif mt-8 sm:mt-24 text-center'>Our latest arrivals</h1>
      </div>
      <div className='flex justify-center items-center'>
        <p className='pt-4 leading-loose text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />  eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <div className='flex flex-wrap justify-center mt-8 sm:ml-40'>
        <img src={img3} className='mr-6 sm:mb-0 mt-20' style={{ width: '250px', height: '350px' }} />
        <img src={img2} className='mr-6 sm:mb-0' style={{ width: '250px', height: '350px' }} />
        <img src={img6} className='mr-6 sm:mb-0 mt-20' style={{ width: '250px', height: '350px' }} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
