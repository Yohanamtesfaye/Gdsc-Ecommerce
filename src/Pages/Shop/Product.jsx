import { ShopContext } from "../../Context/ShopContext";
import React, { useContext } from 'react'

const Product = (props) => {
  const {id,productName, ProductDescription, price,productImage} =props.data;
  const{addTocart, cartItems} =useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
    <div className="flex">
      <div style={{ width: '500px', height: '500px' }}>
        <img src={productImage}  />
      </div>
      <div>
        <b className="text-5xl" >{productName}</b>
        <p className="mt-5 mb-5">${price}</p>
        <p className="w-96 break-words mb-20">{ProductDescription}</p>
        <button onClick={()=>addTocart(id)} className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-14 rounded mt-5"> 
      Add To Cart {cartItemAmount >=0 && <>({cartItemAmount})</>}
      </button>
      </div>
        
    </div>
  )
}

export default Product