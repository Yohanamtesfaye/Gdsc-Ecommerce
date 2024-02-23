import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Pages/Home';
import Shop from './Pages/Shop/Shop';
import Cart from './Pages/Cart/Cart';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
        <Navbar/>
          <Routes>
          <Route path='/' element= {<Home/>} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/cart' element={<Cart/>} />
          </Routes>
        </BrowserRouter>

      </div>
    </>
  )
}

export default App
