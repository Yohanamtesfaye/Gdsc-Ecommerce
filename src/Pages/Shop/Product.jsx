import { ShopContext } from "../../Context/ShopContext";
import React, { useContext } from 'react'

const Product = (props) => {
  const {id,productName, ProductDescription, price,productImage} =props.data;
  const{addTocart, cartItems, removeFromCart, getTotalAmount} =useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  const totalAmount = getTotalAmount();

  return (
    <div className="flex">
      <div style={{ width: '500px', height: '500px' }}>
        <img src={productImage}  />
      </div>
      <div>
        <b className="text-5xl" >{productName}</b>
        <p className="mt-5 mb-5">${price}</p>
        <p className="w-96 break-words mb-20">{ProductDescription}</p>

        <button onClick={()=>addTocart(id)} 
        className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-14 rounded mt-5"> 
        Add To Cart {cartItemAmount >0 && <>({cartItemAmount}) ${totalAmount}</>}
      </button>
      <button className="border border-black py-2 px-5 inline-block" onClick={()=>removeFromCart(id)}>-</button>
      <div className="inline-block border border-black py-2 px-5">{cartItems[id]}</div> 
      <button  className="border border-black py-2 px-5 inline-block" onClick={()=>addTocart(id)}>+</button>
      </div>
        
    </div>
  )
}

export default Product