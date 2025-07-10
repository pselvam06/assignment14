import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import ProductDetails from './Components/ProductDetails';
import Footer from './Components/Footer';
import { Routes,Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div >
      <Navbar />         
     <Routes>
      <Route path='/assignment14/' element={<Home />} />
      <Route path='/assignment14/products' element={<Products />} />
      <Route path='/assignment14/products/:id' element={<ProductDetails />} />
      </Routes>
       <Footer /> 
    </div>
  )
}

export default App
