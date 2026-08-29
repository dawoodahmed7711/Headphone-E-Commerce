import Navbar from './Components/Navbar/Navbar.tsx'

import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <>
      <Navbar/>
      <main>
         <Outlet/>
      </main>
     
      
    </>
  )
}

export default Layout
