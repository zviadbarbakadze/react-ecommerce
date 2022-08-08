import React, { useContext } from 'react'
import { countContext } from '../App'
import useFetch from './useFetch'

export default function Woman() {
  const {addToCart}=useContext(countContext)
    const {data}=useFetch("https://fakestoreapi.com/products/category/women's clothing")
  return (
    <div className="card-cont">
    {data&&data.map((item,index)=>{

        return <div className="card" key={index}>
        <img src={item.image} alt="" width={200}/>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <span>Price: {item.price}$</span>
       
        <button onClick={()=>addToCart(item)}>Add To Cart</button>
    </div>
   
         
    })}
</div>
  )
}
