import React from 'react'
import useFetch from '../hooks/UseFetch'
import starWarsProducts from '../../Datas/starwarsProducts.json'
import ConsolesProducts from '../../Datas/ConsolesProducts.json'
import DiversosProducts from '../../Datas/DiversosProducts.json'


type Products = {
  image: string, 
  nameProduct: string,
  price: string
}

interface StorageProps {
    seeProduct: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void,
    image: string | null | undefined,
    nameProduct: string | null | undefined,
    price: string | null | undefined,
    section: {
      current: HTMLDivElement | null
    },
    starwarsProducts: Products[],
    consolesProducts: Products[],
    diversosProducts: Products[],
    setStarWarsProducts: React.Dispatch<React.SetStateAction<Products[]>>
    setConsolesProducts:  React.Dispatch<React.SetStateAction<Products[]>>
    setDiversosProducts:  React.Dispatch<React.SetStateAction<Products[]>>

}


const Storage = React.createContext<StorageProps | null>(null)

export function useStorage(){
    const context = React.useContext(Storage)
    if(!context) throw new Error('useContext deve estar dentro do Provider')
    return context
}


export const GlobalStorage = ({children}: React.PropsWithChildren ) => {
    const section = React.useRef<HTMLDivElement>(null) 
    const [image, setImage] = React.useState<string | null | undefined>('')
    const [nameProduct, setNameProduct] = React.useState<string | null | undefined>('')
    const [price, setPrice] = React.useState<string | null | undefined>('')
    const [starwarsProducts, setStarWarsProducts] = React.useState(starWarsProducts)
    const [consolesProducts, setConsolesProducts] = React.useState(ConsolesProducts)
    const [diversosProducts, setDiversosProducts] = React.useState(DiversosProducts)

    const seeProduct: React.MouseEventHandler<HTMLAnchorElement> = (event) => {
        if(event.target instanceof HTMLElement){
          setImage(event.target.parentNode?.children[0].getAttribute('src'))
          setNameProduct(event.target.parentNode?.children[1].textContent)
          setPrice(event.target.parentNode?.children[2].textContent)
        }
      }








  return (
    <Storage.Provider value={{
      seeProduct, 
      image, 
      nameProduct, 
      price, 
      section, 
      starwarsProducts,
      consolesProducts,
      diversosProducts,
      setStarWarsProducts,
      setConsolesProducts,
      setDiversosProducts


      }}>
       {children}
    </Storage.Provider>

  )
}


