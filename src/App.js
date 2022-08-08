


import { createContext, useState } from 'react';



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
  const[show,setShow]=useState(true)
  const handleNav=()=>{
    setShow(!show)
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
    <countContext.Provider value={{cart,addToCart,remove,deleteItem,handle,handleNav,show}}>
    <div className="App">
    
     <Nav />
     
      {toggle && (<Cart />)}
      <Routes>
  <Route path='/' element={<Allproducts />}/>
  <Route path='jewelery' element={<Jewelery/>}/>
  <Route path='electronic' element={<Electronic/>}/>
  <Route path='mensclothes' element={<Mens/>}/>
  <Route path='womensclothes' element={<Woman/>}/>
  </Routes>
  
  
    </div>
    </countContext.Provider>
  );
}

export default App;
