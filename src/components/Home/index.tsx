import React from 'react'
import Banner from '../Banner'
import '../Banner/Banner.css'
import GeekProducts from '../GeekProducts'
import { useStorage } from '../hooks/UseContext'
import { useNavigate } from 'react-router-dom'
function Home() {


  return (
    <main>
       <Banner />
       <GeekProducts />
    </main>
  )

}

export default Home
