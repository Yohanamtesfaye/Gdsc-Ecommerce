import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import { PRODUCTS } from '../../../ProducList';
import CartItem from './CartItem';
import { Link, useNavigate } from 'react-router-dom';
import emptyCart from '../../Images/emptyCartjpg.jpg';

const Cart = () => {
  const { cartItems, getTotalAmount, resetCart } = useContext(ShopContext);
  const totalAmount = getTotalAmount();
  const navigate = useNavigate();

  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-10">
      <h1 className="text-4xl font-bold font-sans text-center mb-8">Your Cart</h1>
      
      {totalAmount === 0 ? (
        <div className="flex flex-col items-center">
          <img src={emptyCart} alt="Empty Cart" className="w-1/2 sm:w-auto mb-8" />
          <h1 className="text-bold text-3xl font-serif mb-8 text-center">
            Looks like there is nothing in your cart yet. <Link className="text-blue-500" to="/shop">Click here</Link> to shop.
          </h1>
        </div>
      ) : (
        <p className="pt-4 pb-5 text-center">Not ready to checkout? Continue Shopping</p>
      )}

      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-2/3 mr-0 sm:mr-4 mb-8 sm:mb-0">
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem key={product.id} data={product} />;
            }
          })}
        </div>

        {totalAmount > 0 && (
          <div className="w-full sm:w-1/3 ml-0 sm:ml-4">
            <div className="mb-8">
              <h1 className="text-2xl font-bold mb-4">Order Summary</h1>
              <h3>SubTotal: <span className="ml-4">${totalAmount}</span></h3>
              <h3>Shipping: <span className="ml-4">Calculated at next step</span></h3>
              <hr className="border-b border-gray-500 my-4 mt-5" />
              <h3>Total: <span className="ml-8">${totalAmount}</span></h3>
            </div>
            <button
              type="reset"
              className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded mt-5 w-full"
              onClick={() => { navigate("/complete"); resetCart(); }}
            >
              Continue To Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
