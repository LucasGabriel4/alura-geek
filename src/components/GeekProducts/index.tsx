import React from 'react'
import Product from './Product'
import './GeekProducts.css'
import { useStorage } from '../hooks/UseContext'
import useFetch from '../hooks/UseFetch'





function GeekProducts() {

  const {section,starwarsProducts,consolesProducts,diversosProducts} = useStorage()


  return (
    <section className='Geek-Products'>
         <Product typeProduct='Star Wars' dataProducts={starwarsProducts}/>
         <Product typeProduct='Consoles' dataProducts={consolesProducts} refElement={section}/>
         <Product typeProduct='Diversos' dataProducts={diversosProducts}/>
    </section>
  )
}

export default GeekProducts
