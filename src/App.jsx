

import { Outlet, useLocation ,matchPath } from 'react-router-dom'
import './App.css'
import Nav from './Components/nav/Nav'
import Foter from './Components/Foter.jsx/Foter'
import ContextProvider from './datacontext/usedataContext'

function App() {
const {pathname} = useLocation()
 const paths = ['/','/Statistics','/Dashboard', '/Contact','/Details/:id' ,"/All-Products",'/Laptops','/Phones','/Accessories','/Iphone','/Smart-Watches']
 const ValidPath = paths.some(path => matchPath({ path, end: true }, pathname));
  return (
    <ContextProvider>
   <div >

   { ValidPath && <Nav/>}
   <div className='min-h-[calc(100vh-24rem)]'>
    <Outlet/>
   </div>

  { ValidPath && <Foter/>} 
   </div>
   </ContextProvider>
  )
}

export default App
