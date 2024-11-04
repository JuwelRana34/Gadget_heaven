// import { useState } from 'react'

import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './Components/nav/Nav'
import Foter from './Components/Foter.jsx/Foter'
import ContextProvider from './datacontext/usedataContext'

function App() {


  return (
    <ContextProvider>
   <div >
   <Nav/>
   <div className='min-h-[calc(100vh-24rem)]'>
    <Outlet/>
   </div>
   
   <Foter/>
   </div>
   </ContextProvider>
  )
}

export default App
