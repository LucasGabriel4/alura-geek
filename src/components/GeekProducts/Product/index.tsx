import React from 'react'
import './Product.css'
import Arrow from '../../../assets/arrow.svg'
import CardProduct from '../CardProduct'
import { Link } from 'react-router-dom'




type Products = {
  image: string, 
  nameProduct: string,
  price: string
}

type ProductProps = {
  typeProduct: string,
  dataProducts: Products[],
  refElement?: {
    current: HTMLDivElement | null
  }
}

function Product({typeProduct, dataProducts,refElement}: ProductProps) {
  return (
    <div className='Product' ref={refElement}>
        <div className='Product-type'>
              <h1>{typeProduct}</h1>
              <div className='see-all'>
                <Link to='TodosProdutos'>Ver Tudo</Link>
                <img src={Arrow} />
              </div>
            </div>

          <div className='cards-products'>
           {dataProducts.map(product => (
               <CardProduct 
               key={product.nameProduct} 
               image={product.image} 
               nameProduct={product.nameProduct} 
               price={product.price}
               removeAndedit={false}
               />
           ))}
          </div>
          
          
    </div>
  )
}

export default Product
