import React, { useContext} from 'react'
import { NavLink } from 'react-router-dom'

import {FaShoppingCart, FaTimes} from 'react-icons/fa'
import {FiMenu} from 'react-icons/fi'
import { countContext } from '../App'



export default function Nav() {
  const {cart,handle,showNavbar,navRef}=useContext(countContext)
  
 
  return (
    <nav>
       
          <div ref={navRef} className="main-nav">
           
        

      <div className="otherpoducts">
      <NavLink to='react-ecommerce'>All Products</NavLink> 
        <NavLink to='react-ecommerce/jewelery'>Jewelery</NavLink>
        <NavLink to='react-ecommerce/electronic'>Electronics</NavLink>
        <NavLink to='react-ecommerce/mensclothes'>Men's Clothing</NavLink>
        <NavLink to='react-ecommerce/womensclothes'>Women's Clothing</NavLink>
        </div>
        <FaTimes className='fimenu close'onClick={showNavbar} />
        </div>
      
        <FiMenu  className='fimenu' onClick={showNavbar}/>
        <div className="carts">
         <div className="shop-cont">

         </div>
         <div className='shop-number'>{cart.length}</div>
         
         <FaShoppingCart className='cart' color='white' fontSize='35px'onClick={handle} />
         
         
        </div>
    </nav>
  )
}
