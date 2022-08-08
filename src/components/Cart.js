import React, { useContext } from 'react'
import { countContext } from '../App'

export default function Cart() {
  const {cart,addToCart,remove,deleteItem}=useContext(countContext)
  const totalPrice=cart.reduce((a,c)=>a+c.price*c.qty,0)

  
  return (
    <>
    <div className='cart-info'>
      {cart.length===0 && <div className='empty' >Your Cart Is Empty!</div>}
      
  
   
       {cart.map((item)=>{
        return <div className="cart-map" key={item.id}>
        <img src={item.image} alt="" width={70} height={70}/>
        
        <button className='plus-button' onClick={()=>addToCart(item)}>+</button> 
        <button className='minus-button' onClick={()=>remove(item)}>-</button>  
        
        <div className='qty' >{item.qty} X {item.price.toFixed(2)}$ = {item.qty*item.price}$</div>  
        <button className='delete-button' onClick={()=>deleteItem(item)}>delete</button>
                </div>
       })}
       
       {cart.length!==0 && (
        <>
        <hr></hr>
        <div className='total-price'>Total Price: {totalPrice.toFixed(2)}$</div>
        <button className='check-out' onClick={()=>alert('Checked!')}>Check Out</button>
        </>
       )}
       
       
    </div>
   
    </>
  )
}
