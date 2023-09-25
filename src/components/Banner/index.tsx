import React from 'react'
import Button from '../Button/Button'
import { useStorage } from '../hooks/UseContext'


function Banner() {
  const {section} = useStorage()

  function sectionScroll(){
     if(section.current){
        section.current.scrollIntoView({
          behavior: "smooth", 
          block: "center", 
         
        })
     }
  }

  
  return (
    <section className='Banner-Geek'>
      <div className='Banner-Geek-content'>
        <h1>Dezembro Promocional</h1>
        <h3>Produtos selecionados com 33% de desconto</h3>
        <Button onClick={sectionScroll}  width='130px' height='51px' background={true} color='#fff' border={false}>Ver Consoles</Button>
      </div>
      
    </section>
  )
}

export default Banner
