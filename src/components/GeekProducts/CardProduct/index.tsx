import React from 'react'
import './CardProduct.css'
import  StarWars from '../../../assets/starwars-1.svg'
import Trash from '../../../assets/trash.svg'
import Edit from '../../../assets/edit.svg'
import { Link } from 'react-router-dom'
import { useStorage } from '../../hooks/UseContext'


type CardProductProps = {
  image: string,
  nameProduct: string,
  price: string,
  removeAndedit: boolean
}




function CardProduct({image, nameProduct, price, removeAndedit}: CardProductProps) {
  const {seeProduct} = useStorage()



  return (
    <div className='cards'>
       {removeAndedit && 
          <div className='Remove-and-edit'>
             <img src={Trash}/>
             <img src={Edit}/>
           </div>
        
       }
     
        <div className='card' >
          <img src={image} />
          <h2>{nameProduct}</h2>
          <span>{price}</span>
          <Link to='/ProdutoDescricao' onClick={seeProduct}>Ver Produto</Link>
        </div>
     
    </div>
  )
}

export default CardProduct
