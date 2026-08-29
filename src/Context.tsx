
import { createContext, useState  } from 'react'
import type { ReactNode } from 'react'


export const SystemContext = createContext<any>(null)


interface ProductData {
  id: number,
    badge: string,
    name: string,
    tagline: string,
    description: string,
    price: number,
    image: any,
}
function Context({children}:{children:ReactNode}) {
   const [Details ,  setDetails] = useState<ProductData|null>(null)
   const [Cart , setCart]  = useState<ProductData[]>([])
   const [Order ,  setOrder] = useState<ProductData[]>([])
   const [Current ,  setCurrent] = useState<ProductData[]>([])
   const [shipdetail ,  setshipdetail] = useState(null)
   const [Favoutite , setFavourite] = useState<ProductData[]>([])


   function ShowDetails(item:ProductData){
     setDetails(item)
   }
    function AddCart(Cartitem:ProductData){
            setCart((prev)=>[...prev , Cartitem])
    }
  function OrderData(order:any):void{
    setOrder((prev)=>[...prev ,  order])
     console.log(Order)
  }
  function CurrentData(curr:any):void{
     setCurrent((prev)=>[...prev , curr])
     console.log('Current:',curr)
     console.log('prams',curr)
     console.log('Order',Current)
   }
   function ship(item:any):void {
    setshipdetail(item)
    console.log('Ship Details',item)
    console.log(shipdetail)
   }
   function AddtoFavourite(item:any):void{
     setFavourite((prev)=>[...prev , item])
     console.log('Favoutite=>', item)
     console.log(Favoutite)
   }
  
  return (
    <>
    <SystemContext.Provider value={{ShowDetails  , Details , AddCart ,  Cart ,  setCart ,  setOrder  , OrderData , Order , CurrentData  , Current, ship , shipdetail ,  setCurrent ,  AddtoFavourite , Favoutite ,  setFavourite} }>
      {children}
    </SystemContext.Provider>
    </>
  )
}

export default Context
