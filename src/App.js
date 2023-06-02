import React from 'react'
import Home from "./component/home"
import About from "./component/about"
import Menu from "./component/menu"
import Gallery from "./component/gallery"
import Contact from "./component/contact"
import Signup from "./component/signup"
import "../src/App.css"
import {
  createBrowserRouter,
 
  RouterProvider,
 
} from "react-router-dom";

const App = () => {
  return (
    <div className='app'>
     
     
      <RouterProvider basename="/home" router={router} />
    </div>
  )
}
const router = createBrowserRouter([
  {
     path: "/home",
    element:  
   <Home/>
  
   
  },
  {
    path: "/about",
    element:  
   <About/>
   
  },
  {
    path: "/about",
    element:  
   <Menu/>
   
  },
  {
    path: "/about",
    element:  
   <Gallery/>
   
  },
  {
    path: "/service",
    element:  
   <Service/>
   
  },
  {
    path: "/contact",
    element:  
   <Contact/>
   
  },
  {
    path: "/signup",
    element:  
   <Signup/>
   
  },
]);
export default App;