import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
const CartItem = (props) => {
  const {id, productName,price,productImage} = props.data
  const {cartItems, removeFromCart} = useContext(ShopContext);
  return (
    <div>
         <div className="flex">
        <div style={{ width: '200px', height: '200px' }}>
        <img src={productImage}  />
      </div>
      <div>
        <b className="text-5xl" >{productName}</b>
        <p className="mt-5 mb-5 font-bold">${price}</p>
        <p>Quantity: {cartItems[id]}</p>
        <button onClick={()=>removeFromCart(id)} className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-14 rounded mt-5">remove</button>
      </div>
    </div>
    <hr  className="border-b border-gray-500 my-4 mt-5" />
    </div>
  )
}

export default CartItem