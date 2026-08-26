
import { createContext, useState ,  ReactNode, use } from 'react'

export const SystemContext = createContext()


interface ProductData {
  id: number,
    badge: string,
    name: string,
    tagline: string,
    description: string,
    price: number,
    image: any,
}
function Context({children}:{children:React.ReactNode}) {
   const [Details ,  setDetails] = useState<ProductData|null>(null)
   const [Cart , setCart]  = useState<ProductData[]>([])
   const [Order ,  setOrder] = useState<ProductData[]>([])
   const [Current ,  setCurrent] = useState(null)
   const [shipdetail ,  setshipdetail] = useState(null)


   function ShowDetails(item:ProductData){
     setDetails(item)
   }
    function AddCart(Cartitem:ProductData){
            setCart((prev)=>[...prev , Cartitem])
    }
  function OrderData(order){
    setOrder((prev)=>[...prev ,  order])
     console.log(Order)
  }
  function CurrentData(curr){
     setCurrent(curr)
     console.log('Current:',curr)
     console.log('prams',curr)
     console.log('Order',Current)
   }
   function ship(item) {
    setshipdetail(item)
    console.log('Ship Details',item)
    console.log(shipdetail)
   }


  return (
    <>
    <SystemContext.Provider value={{ShowDetails  , Details , AddCart ,  Cart ,  setCart ,  setOrder  , OrderData , Order , CurrentData  , Current, ship , shipdetail} }>
      {children}
    </SystemContext.Provider>
    </>
  )
}

export default Context
