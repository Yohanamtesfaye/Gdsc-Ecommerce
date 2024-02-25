import { ShopContext } from "../../Context/ShopContext";
import React, { useContext } from 'react'

const Product = (props) => {
  const {id,productName, ProductDescription, price,productImage} =props.data;
  const{addTocart, cartItems, removeFromCart, getTotalAmount} =useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  const totalAmount = getTotalAmount();

  return (
    <div className="flex mt-16">
      <div style={{ width: '250px', height: '250px' }}>
        <img src={productImage}/>
      </div>
      <div className="ml-14 ">
        <b className=" text-base sm:text-lg md:text-xl lg:text-2xl xl:text-5xl" >{productName}</b>
        <p className="mt-5 mb-5">${price}</p>
        <p className="w-96 break-words mb-16">{ProductDescription}</p>

        <button onClick={()=>addTocart(id)} 
        className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-14 rounded mt-5 "> 
        Add To Cart {cartItemAmount >0 && <>({cartItemAmount}) ${totalAmount}</>}
      </button>
      <button className="border border-black py-2 px-5 inline-block" onClick={()=>removeFromCart(id)}>-</button>
      <div className="inline-block border border-black py-2 px-5 mb-4">{cartItems[id]}</div> 
      <button  className="border border-black py-2 px-5 inline-block" onClick={()=>addTocart(id)}>+</button>
      <hr  className="border-b border-gray-500 my-4 mt-5" />
      </div>
        
    </div>
  )
}

export default Product