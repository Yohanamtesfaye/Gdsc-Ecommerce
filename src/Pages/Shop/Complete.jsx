import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import { PRODUCTS } from '../../../ProducList';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../Component/Footer';

const Complete = () => {
  const { cartItems, getTotalAmount } = useContext(ShopContext);
  const totalAmount = getTotalAmount();
  const navigate = useNavigate();

  const productsInCart = PRODUCTS.filter(product => cartItems[product.id] > 0);

  return (
    <div className=" mx-auto px-4">
      <div className='mt-10 font-bold text-4xl text-center'>
        <h2> Your order was successful, Total Amount: ${totalAmount}</h2>
        <p>wish to continue </p>
        <button onClick={() => navigate("/shop")} className='text-blue-500'>Click here</button>
      </div>
      <h1 className='font-serif text-4xl font-bold mt-10'>Bought Items</h1>
      <div className='mt-10 mb-10'>
        <ul>
          {productsInCart.map(product => (
            <li key={product.id} className="flex items-center">
              <div className="mr-4">
                <img src={product.productImage} alt={product.productName} className="w-24 h-auto sm:w-32 sm:h-auto" />
              </div>
              <div className='font-bold mb-40'> {product.productName} </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Complete;
