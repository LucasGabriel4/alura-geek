import React from 'react'
import './Footer.css'
import LogoFooter from '../../assets/Logo.svg'
import Form from './form'

function Footer() {
  return (
    <footer className='footer'>
       <div className='footer-container'>
           <div className='nav-footer'>
               <img src={LogoFooter} alt='Logo do footer' />
               <nav>
                 <ul>
                    <li><a href=''>Quem somos nós</a></li>
                    <li><a href=''>Política de privacidade</a></li>
                    <li><a href=''>Programa fidelidade</a></li>
                    <li><a href=''>Nossas lojas</a></li>
                    <li><a href=''>Quero ser franqueado</a></li>
                    <li><a href=''>Anuncie aqui</a></li>
                 </ul>
               </nav>

              
           </div>

           <Form/>
       </div>
    </footer>
  )
}

export default Footer
