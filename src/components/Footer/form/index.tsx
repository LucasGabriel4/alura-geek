import React from 'react'
import Input from '../../Input/Input'
import './Form.css'
import Button from '../../Button/Button'

function Form() {
  return (
    <form className='form'>
       <h1>Fale conosco</h1>
        <Input type='text' placeholder='Nome' width='100%' height='56px' borderRadius='4px'/>
        <textarea placeholder='Escreva sua Mensagem'></textarea>
        <Button width='165px' height='51px' color='#fff' background={true} border={false}>Enviar Mensagem</Button>

    </form>
  )
}

export default Form
