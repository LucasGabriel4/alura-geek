import React from 'react'
import './AllProducts.css'
import Button from '../Button/Button'
import CardProduct from '../GeekProducts/CardProduct'
import { Link} from 'react-router-dom'
import { useStorage } from '../hooks/UseContext'


function AllProducts() {

  const {starwarsProducts, consolesProducts, diversosProducts} = useStorage()
  
  return (
    <section className='all-products'>
      <div className='all-products-container'>
              <div>
                  <h1>Todos os produtos</h1>
                  <Link to='/AdicionarProduto'>
                        <Button
                        width='164px' 
                        height='51px' 
                        background={true} 
                        border={false} color='#fff'
                        >Adicionar produto</Button>
                  </Link>
              </div>

          <div className='all-products-flex'>
              {starwarsProducts.map((product) => (
                   <CardProduct 
                   key={product.nameProduct} 
                   image={product.image} 
                   nameProduct={product.nameProduct} 
                   price={product.price}
                   removeAndedit={false}
                   />
              ))}

             {consolesProducts.map((product) => (
                   <CardProduct 
                   key={product.nameProduct} 
                   image={product.image} 
                   nameProduct={product.nameProduct} 
                   price={product.price}
                   removeAndedit={false}
                   />
              ))}

             {diversosProducts.map((product) => (
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

    </section>
  )
}

export default AllProducts
