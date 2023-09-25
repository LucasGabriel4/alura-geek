import React from 'react'
import './ProductDescription.css'
import StarWars_1 from '../../src/assets/starwars-1.svg'
import { useStorage } from '../hooks/UseContext'

function ProductDescription() {

  const {image, nameProduct, price} = useStorage()

  return (
    <section className='Product-Description'>
       <div className='Product-Description-container'>
        <div className='bg-product'>
           {image && <img src={image}/>}
        </div>
          <div className='info-product'>
              <h1>{nameProduct}</h1>
              <span>{price}</span>
              <p>Voluptas voluptatum quibusdam similique, 
                class debitis alias maecenas eveniet ridiculus, 
                facilis fusce! Ullam conubia? Sociis, minima malesuada 
                habitasse distinctio sequi aliqua malesuada. Quisque deleniti 
                proin expedita, aliquid litora. Iste recusandae? Commodo, quia 
                ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, 
                dolorum do. Animi porta anim magnam
                </p>
          </div>
           
        </div>
    </section>
  )
}

export default ProductDescription
