import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter, createHashRouter, RouterProvider} from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import About from './Components/About/About'
import Portifilio from './Components/Portifilio/Portifilio'
import Contact from './Components/Contact/Contact'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'

let x=createHashRouter([
  {path:'',element:<Layout/>,
  children:[{index:true,element:<Home/>},
            {path:'about',element:<About/>},
            {path:'portifilio',element:<Portifilio/>},
            {path:'contact',element:<Contact/>}],
}])
function App() {

  return (
  
  <RouterProvider router={x}></RouterProvider>
  )
}

export default App
