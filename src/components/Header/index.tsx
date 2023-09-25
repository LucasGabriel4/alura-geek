import React from 'react'
import logo from '../../assets/Logo.svg'
import search from '../../assets/search.svg'
import './Header.css'
import Button from '../Button/Button'
import { Link, useLocation } from 'react-router-dom'

function Header() {
   const location = useLocation()
     
  

  
   
  return (
    <header className='Header'>
            <div>
              <Link to='/'>
                <img src={logo} alt='Logo aluraGeek'/>
              </Link>
              <input type='text' placeholder='O que deseja encontrar?'/>
            </div>
          
         { 
          location.pathname !== '/Login' 
          && location.pathname !== '/ProdutoDescricao' 
          && location.pathname !== '/AdicionarProduto' 
          && location.pathname !== '/TodosProdutos' ?
          <Link to='Login'>
               <Button 
               width='182px' 
               height='51px' 
               border={true} 
               color='#2A7AE4' 
               background={false}
               >Login</Button>
           </Link>
           :
           ''
         }

         {location.pathname === '/AdicionarProduto' ?
             <Button 
             width='182px' 
             height='51px' 
             border={true} 
             color='#2A7AE4' 
             background={false}
             >Menu administrador</Button>
          :
          ''
         }
         
         
           <div className='search-mobile'>
              <img src={search} alt='Campo de Pesquisa' />
           </div>
    </header>
  )
}

export default Header
