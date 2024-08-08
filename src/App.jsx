import React from "react"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./COMPONENTS/Home"
import About from "./COMPONENTS/About"
import Skills from "./COMPONENTS/Skills"
import Projects from "./COMPONENTS/Projects"
import Contact from "./COMPONENTS/Contact"
import Navbar from "./COMPONENTS/Navbar"








function App() {
  
  return (
    
   <BrowserRouter>

            
            <Navbar links={["Home","About","Skills","Projects","Contact"]}/>
          
            
     <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/About' element={<About/>}></Route>
       <Route path='/Skills' element={<Skills/>}></Route>
       <Route path='/Projects' element={<Projects/>}></Route>
       <Route path='/Contact' element={<Contact/>}></Route>

       <Route> </Route>
     </Routes>
   </BrowserRouter>


   
     
  )
}

export default App
