import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../../ProducList'
export const ShopContext = createContext({
  cartItems: {}, 
  addTocart: () => {},
  getTotalAmount: () => 0, 
  removeFromCart: () => {},
  resetCart: () => {}
});
const getDefaultCart =()=>{
  let cart = {}
  for(let i=1;i<PRODUCTS.length +1; i++){
    cart[i] =0;
  }
  return cart
}
const ShopContextProvider = (props) =>{
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const getTotalAmount = () =>{
    let totaAmount =0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        let itemInfo = PRODUCTS.find((product=>product.id === Number(item)))
        totaAmount+= cartItems[item] * itemInfo.price
      }
    }
    return totaAmount
  }
  const addTocart = (itemId)=>{
    setCartItems((prev)=> ({...prev,[itemId]: prev[itemId]+1 })) 
   }
  const removeFromCart = (itemId) =>{
    setCartItems((prev)=>({
      ...prev,
      [itemId]: prev[itemId] -1
    }))
  }
  const resetCart = () => {
    setCartItems(getDefaultCart());
  };
  const contextValue = {cartItems, addTocart,removeFromCart,getTotalAmount,resetCart};
  return(
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}
export default ShopContextProvider