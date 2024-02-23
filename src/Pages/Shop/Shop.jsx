import React from 'react'
import Search from '../../Component/Search'
import { PRODUCTS } from '../../../ProducList'
import Product from './Product'
import Footer from '../../Component/Footer'


const Shop = () => {
  return (
    <div>
      <div className=' flex justify-between pl-10 pt-12'>
        <div>
        <h1 className='text-2xl font-bold font-mono mb-5'>Shop</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br />
          elit, sed do eiusmod tempor incididunt ut labore et <br />
          dolore magna aliqua</p>
        </div>

        <div>
          <Search/>
        </div>
      </div>
     <div>
     {PRODUCTS.map((product)=>
        <Product data={product}/>
       )}
      </div>
      <Footer/>
     </div>
    

  )
}

export default Shop