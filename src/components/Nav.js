import React, { useContext} from 'react'
import { NavLink } from 'react-router-dom'

import {FaShoppingCart} from 'react-icons/fa'
import {FiMenu} from 'react-icons/fi'
import { countContext } from '../App'



export default function Nav() {
  const {cart,handle,handleNav,show}=useContext(countContext)

 
  return (
    <nav>
        {show&&(
          <>
           <div className="allproducts">
        <NavLink to='/'>All Products</NavLink> 
        </div>
      <div className="otherpoducts">
        <NavLink to='/jewelery'>Jewelery</NavLink>
        <NavLink to='/electronic'>Electronics</NavLink>
        <NavLink to='/mensclothes'>Men's Clothing</NavLink>
        <NavLink to='/womensclothes'>Women's Clothing</NavLink>
        </div>
        </>
        )}
        <FiMenu  className='fimenu'onClick={handleNav} />
        <div className="carts">
         <div className="shop-cont">

         </div>
         <div className='shop-number'>{cart.length}</div>
         
         <FaShoppingCart className='cart' color='white' fontSize='35px'onClick={handle} />
         
         
        </div>
    </nav>
  )
}
