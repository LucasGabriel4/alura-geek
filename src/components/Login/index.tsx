import React from 'react'
import './Login.css'
import Input from '../Input/Input'
import Button from '../Button/Button'
import useForm from '../hooks/useForm'

function Login() {

  const email = useForm('email')
  const senha = useForm('senha')

  const handleSubmit:React.MouseEventHandler<HTMLFormElement> = (event) =>{
    event.preventDefault()
    if(email.validate() && senha.validate()){
      alert('Logando...')
    }else{
      alert('email ou senha invalido!')
    }
  }


  return (
    <section className='Login'>
      <form onSubmit={handleSubmit}> 
          <h1>Iniciar Sessão</h1>
            <Input 
            type='email' 
            placeholder='Escreva seu email' 
            width='423px' 
            height='63px' 
            borderRadius='4px'
            value={email.value}
            onChange={email.onChange}
            onBlur={email.onBlur}/>
            <div className='erro'>
                {email.erro ? <p>{email.erro}</p> : ''} 
            </div>
          

            <Input 
            type='password' 
            placeholder='Escreva sua senha' 
            width='423px' 
            height='63px' 
            borderRadius='4px'
            value={senha.value}
            onChange={senha.onChange}
            onBlur={senha.onBlur}
            />
            <div className='erro'>
                {senha.erro ? <p>{senha.erro}</p> : ''} 
            </div>

            <Button width='423px' 
            height='63px' 
            color='#fff' 
            background={true} 
            border={false}
            >
            Entrar
            </Button>

      </form>
      
    </section>
  )
}

export default Login
