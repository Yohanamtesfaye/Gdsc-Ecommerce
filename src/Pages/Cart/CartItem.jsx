import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
const CartItem = (props) => {
  const {id, productName, ProductDescription,price,productImage} = props.data
  const {CartItems, addTocart, removeFromCart} = useContext(ShopContext);
  return (
    <div>
         <div className="flex">
      <div style={{ width: '500px', height: '500px' }}>
        <img src={productImage}  />
      </div>
      <div>
        <b className="text-5xl" >{productName}</b>
        <p className="mt-5 mb-5">${price}</p>
        <button onClick={()=>removeFromCart(id)} className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-14 rounded mt-5">remove</button>
      </div>
    </div>
    </div>
  )
}

export default CartItem