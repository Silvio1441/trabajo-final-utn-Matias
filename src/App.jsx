import React from 'react'
import useCostumContext from "./ContextManager/ContextProvider"
import {ProductCard} from "./components"
import  {CartPage, DetailPage, HomePage, ContactPage}  from './screens'
import { NavLink, Route, Routes } from 'react-router-dom'
import ".././src/screens"


/* import DetailPage from './screens/DetailPage/DetailPage' */

function App() {
 
  return (
    <>
    <div className='navbar'>
      <nav>
        <h2 className='logo'>MARKT</h2>
        <NavLink to="/cart" className="car"><i class="fa-solid fa-cart-shopping"></i></NavLink>
        <NavLink to="/" className="car"><i class="fa-solid fa-house"></i></NavLink>
        <NavLink to="/contact" className="car"><i class="fa-solid fa-envelope"></i></NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/detail/:id' element={<DetailPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
    {/* <ContactPage/> */}
    </div>
    
    </>
  )
  
}

export default App
