import React from 'react'
import './AddProduct.css'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { useStorage } from '../hooks/UseContext'







function AddProduct() {
  const [urlImage, setUrlImage] = React.useState('')
  const [category, setCategory] = React.useState('')
  const [nameProduct, setNameProduct] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [price, setPrice] = React.useState('')
  const {starwarsProducts,
   setStarWarsProducts,
   consolesProducts,
   setConsolesProducts, 
   diversosProducts,
   setDiversosProducts} = useStorage()
  


 const handleSubmit:React.FormEventHandler<HTMLFormElement> = (event) => {
      event.preventDefault()
      if(urlImage.length === 0 || 
         category.length === 0 || 
         nameProduct.length === 0 || 
         price.length === 0 || 
         description.length === 0){
        alert('Preencha o formulario para adicionar um novo produto!')
        return 
      }
      
    const newProduct = {
        image: urlImage,
        nameProduct: nameProduct,
        price: price,
        description: description
      }
      
      if(category === 'starwars'){
        setStarWarsProducts([...starwarsProducts, newProduct])
      }

      if(category === 'consoles'){
        setConsolesProducts([...consolesProducts, newProduct])
      }

      if(category === 'diversos'){
        setDiversosProducts([...diversosProducts, newProduct])
      }
   
      alert('Produto adicionado com sucesso :)')

  }

 

  return (
    <section className='add-product'>
      <form onSubmit={handleSubmit}>
           <h1>Adicionar novo produto</h1>
           <Input 
           type='text' 
           placeholder='URL da imagem' 
           width='100%' 
           height='56px' 
           value={urlImage} 
           onChange={({target}) => setUrlImage(target.value)}/>

           <Input 
           type='text' 
           placeholder='Categoria' 
           width='100%' 
           height='56px' 
           value={category} 
           onChange={({target}) => setCategory(target.value)}/>

           <Input 
           type='text' 
           placeholder='Nome do produto' 
           width='100%' 
           height='56px' 
           value={nameProduct} 
           onChange={({target}) => setNameProduct(target.value)}/>

           <Input 
           type='text' 
           placeholder='Preço do produto' 
           width='100%' 
           height='56px' 
           value={price} 
           onChange={({target}) => setPrice(target.value)}/>

           <textarea placeholder='Descrição do produto' value={description} onChange={({target}) => setDescription(target.value)}></textarea>
           <Button width='100%' height='51px' border={false} background={true} color='#fff'>Adicionar produto</Button>
      </form>
     
    </section>
  )
}

export default AddProduct
