import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from  './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Subfooter from './components/SubFooter'
import Login from './components/Login'
import ProductDescription from './components/ProductDescription'
import AllProducts from './components/AllProducts'
import AddProduct from './components/AddProduct/AddProduct'
import { GlobalStorage } from './components/hooks/UseContext'


function App() {
  
 
 

  return (
    
    <BrowserRouter>
       <GlobalStorage>
            <Header />
              <Routes>
                  <Route path='/' element={<Home />}></Route>
                  <Route path='Login' element={<Login />}></Route>
                  <Route path='ProdutoDescricao' element={<ProductDescription/>}></Route>
                  <Route path='TodosProdutos' element={<AllProducts />}></Route>
                  <Route path='AdicionarProduto' element={<AddProduct />}></Route>
              </Routes>
              <Footer />
              <Subfooter />
       </GlobalStorage>
    </BrowserRouter>
  )
}

export default App
