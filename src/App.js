


import { createContext, useRef, useState } from 'react';



import { Route, Routes } from 'react-router-dom';
import Allproducts from './components/Allproducts';
import Cart from './components/Cart';
import Electronic from './components/Electronic';
import Jewelery from './components/Jewelery';
import Mens from './components/Mens';
import Nav from './components/Nav';
import Woman from './components/Woman';
export const countContext=createContext()

function App() {
 
  const[cart,setCart]=useState([])
  const [toggle, setToggle] = useState(false);
  const navRef=useRef()
   const showNavbar=()=>{
    navRef.current.classList.toggle("responsive-nav")
   }
  const handle=()=>{
    setToggle(!toggle)
  }
  
  const addToCart=(item)=>{
    const exist=cart.find(x=>x.id===item.id)
    if(exist){
       setCart(cart.map(x=>x.id===item.id?{...exist,qty:exist.qty+1}:x))
    }else{
      setCart([...cart,{...item,qty:1}])
    }
   
  }
  const remove=(item)=>{
    const exist=cart.find(x=>x.id===item.id)
    if(exist.qty===1){
      setCart(cart.filter(x=>x.id!==item.id))
      
    }else{
      setCart(cart.map(x=>x.id===item.id?{...exist,qty:exist.qty-1}:x))
    }
  }
  const deleteItem=(item)=>{
    const exist=cart.find(x=>x.id===item.id)
    if(exist){
      setCart(cart.filter(x=>x.id!==item.id))
    }
    
  }


  return (
    <countContext.Provider value={{cart,addToCart,remove,deleteItem,handle,showNavbar,navRef}}>
    <div className="App">
    
     <Nav />
     
      {toggle && (<Cart />)}
      <Routes>
  <Route path='react-ecommerce' element={<Allproducts />}/>
  <Route path='react-ecommerce/jewelery' element={<Jewelery/>}/>
  <Route path='react-ecommerce/electronic' element={<Electronic/>}/>
  <Route path='react-ecommerce/mensclothes' element={<Mens/>}/>
  <Route path='react-ecommerce/womensclothes' element={<Woman/>}/>
  </Routes>
  
  
    </div>
    </countContext.Provider>
  );
}

export default App;
