import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Pages/Home';
import Shop from './Pages/Shop/Shop';
import Cart from './Pages/Cart/Cart';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import ShopContextProvider from './Context/ShopContext';
import Complete from './Pages/Shop/Complete';
import PageNotFound from './Component/PageNotFound';

function App() {
  return (
    <>
      <div>
        <ShopContextProvider>
          <BrowserRouter>
          <Navbar/>
            <Routes>
            <Route path='/' element= {<Home/>} />
            <Route path='/shop' element={<Shop/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/complete' element={<Complete/>} />
            <Route path ='*' element = {<PageNotFound/>}/>
            </Routes>
          </BrowserRouter>
        </ShopContextProvider>
       

      </div>
    </>
  )
}

export default App
