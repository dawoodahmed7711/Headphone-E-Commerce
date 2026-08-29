import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Context from './Context.tsx'
import { RouterProvider , createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.tsx'
import Home from './Pages/Home/Home.tsx'
import Details from './Pages/Details/Details.tsx'
import Cart from './Pages/Cart/Cart.tsx'
import Payment from './Pages/Payment/Payment.tsx'
import Order from './Pages/Order/Order.tsx'
import Shipment from './Pages/Shipment/Shipment.tsx'
import Liked from './Pages/Liked/Liked.tsx'
import { ToastContainer } from 'react-toastify'

const router = createBrowserRouter([{
  path:'/',
  element:<Layout/>,
  children:[{
    index:true,
  
    element:<Home/>
  },{
    path:'details',
    element:<Details/>
  },{
    path:'cart',
    element:<Cart/>
  },{
    path:'payment',
    element:<Payment/>
  },{
    path:'order',
    element:<Order/>
  },{
    path:'shipment',
    element:<Shipment/>
  },{
    path:'liked',
    element:<Liked/>
  }]
}])
createRoot(document.getElementById('root')!).render(
    <StrictMode>
       <Context>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer/>
     </Context>
  </StrictMode>,
)
