import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import { PRODUCTS } from '../../../ProducList';
import CartItem from './CartItem';
import { Link, useNavigate } from 'react-router-dom';
import emptyCart from '../../Images/emptyCartjpg.jpg'
const Cart = () => {
  const {cartItems, getTotalAmount, resetCart} = useContext(ShopContext);
  const totaAmount = getTotalAmount();
  const navigate = useNavigate()
  return (
    <div>
      <div className='pl-24 pt-10'>
      <h1 className='text-4xl font-bold font-sans'>Your Cart</h1>
      {totaAmount ==0 &&<>
        <img className='ml-96 mt-10' src={emptyCart}/>
        <h1 className='ml-40 text-bold text-3xl font-serif mt-10' >Looks like there is noting in your cart here yet <Link className ='text-blue-500' to='/shop'>Click here</Link> to shop</h1>
      </> }
      {totaAmount>0 &&<p className='pt-4 pb-5 '>Not ready to checkout? Continue Shopping</p>}
      </div>
      <div className='flex'>
        <div className='mr-96'>
        {PRODUCTS.map(
            (product)=>{
              if(cartItems[product.id] !=0){
                return<CartItem data={product} />
              }
            }
          )}
          </div>
          <div className='ml-4 mt-10'>
          {totaAmount>0 && 
          <>
            <h1 className='mb-10 text-2xl font-bold' >Order Summary</h1>
            <h3 >SubTotal: <span className='ml-44'>${totaAmount}</span></h3>
            <h3 >Shipping: <span className='ml-44'>Calculated at next step</span></h3>
            <hr  className="border-b border-gray-500 my-4 mt-5" />
            <h3 >Total: <span className='ml-52'>${totaAmount}</span></h3>
            <button type='reset' className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-14 rounded mt-5"
          onClick={()=>navigate("/complete") && resetCart() }
          >Continue To Checkout</button>
          </>}
        
          </div>
        
      </div>
     
      
    </div>
  )
}

export default Cart