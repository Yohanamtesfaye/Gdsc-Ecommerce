import React from 'react'
import img1 from '../Images/1.png'
import img2 from '../Images/2.png'
import img3 from '../Images/3.png'
import img4 from '../Images/4.png'
import img5 from '../Images/5.png'
import img6 from '../Images/6.webp'
import img7 from '../Images/7.webp'
import img8 from '../Images/8.webp'
import Footer from '../Component/Footer'

const Home = () => {
  return (
    <div>
      <div className='flex justify-center items-center '>
        <h1 className='text-5xl font-bold font-mono mt-24'>Categories</h1>
      </div>
      <div className='flex justify-center items-center '>
        <p className='pt-4 leading-loose'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />  eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <div  className='flex justify-center items-center'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-14 rounded mt-5'>Button</button>
      </div>
      <div className='flex ml-80 mt-14' style={{ width: '250px', height: '350px' }}>
        <img src={img1} alt="" className='mr-6' />
        <img src={img4} alt="" className='mr-6'/>
        <img src={img5} alt="" className='mr-6' />
      </div>
      <div className='flex justify-center items-center '>
        <h1 className='text-5xl font-bold font-mono mt-24'>Our latest arrivals</h1>
      </div>
      <div className='flex justify-center items-center '>
        <p className='pt-4 leading-loose'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />  eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <div  className='flex justify-center items-center'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-14 rounded mt-5'>Button</button>
      </div>
      <div className='flex ml-80 ' style={{ width: '250px', height: '350px' }}>
        <img src={img2} alt="" className='mr-6 mt-40' />
        <img src={img3} alt="" className='mr-6'/>
        <img src={img6} alt="" className='mr-6 mt-40'  />
      </div>
      <Footer/>
    </div>
    
  )
}

export default Home