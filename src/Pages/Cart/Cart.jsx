import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import { PRODUCTS } from '../../../ProducList';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const {cartItems, getTotalAmount} = useContext(ShopContext);
  const totaAmount = getTotalAmount();
  const navigate = useNavigate()
  return (
    <div>
      <div className='pl-24 pt-10'>
      <h1 className='text-4xl font-bold font-sans'>Your Cart</h1>
      <p className='pt-4 pb-5 '>Not ready to checkout? Continue Shopping <span className='ml-96 text-2xl font-bold'>Order Summary</span></p>
      </div>
      <div>
      {PRODUCTS.map(
          (product)=>{
            if(cartItems[product.id] !=0){
              return<CartItem data={product} />
            }
          }
        )}
        
      </div>
      
    </div>
  )
}

export default Cart