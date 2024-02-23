import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import { PRODUCTS } from '../../../ProducList'; // Assuming this contains the array of products
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../Component/Footer';

const Complete = () => {
  const { cartItems, getTotalAmount } = useContext(ShopContext);
  const totalAmount = getTotalAmount();
  const navigate = useNavigate();

  const productsInCart = PRODUCTS.filter(product => cartItems[product.id] > 0);

  return (
    <div>
       <div className='mt-10 font-bold ml-40 text-4xl text-center '>
         <h2> Your oreder was succesfull, Total Amount: ${totalAmount}</h2>
         <p>wish to continue </p><button onClick={()=>navigate("/shop")} className='text-blue-500'>Click here</button>
      </div>
      <h1 className=' font-serif text-4xl font-bold mt-10'>Bought Items</h1>
      <div className='mt-10 mb-96'>
      <ul>
        {productsInCart.map(product => (
          <li key={product.id}>
            <div className='flex'>
              <div ><img src={product.productImage} style={{ width: '200px', height: '200px' }}/> </div> 
               <div className='mt-16 ml-5 font-bold'> {product.productName} </div> 
            </div> 
          </li>
        ))}
      </ul>
      </div>
     

      <Footer/>
      
    </div>
  );
};

export default Complete;
