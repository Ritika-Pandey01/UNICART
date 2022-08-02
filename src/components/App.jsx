
import React, { useState } from "react";

import Products from "./Products/Products";
import Header from "./layout/Header";
import DemoCarousel from "./Products/LandingCorousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselBar from "./Products/LineCarousel";



function App(){
  const [cartItems,setCartItems]=useState([]);
  const [eventQueue,seteventQueue]=useState({
    id:"",
    type:""
  });
  function handleAddItems(item){
    let items=[...cartItems]
    let index=items.findIndex(i=>i.id===item.id)
    if(index>-1){
      items[index]=item
    }
    else{
      items.push(item)

    }
    setCartItems([...items])
    // setCartItems(cartItems+1);
  }
  function handleRemoveItems(item){
    let items=[...cartItems]
    let index=items.findIndex(i=>i.id===item.id)
    if(items[index].quantity===0){
      items.splice(index,1)
    }
    else{
      items[index]=item
    }
    setCartItems([...items])

    // setCartItems(cartItems-1);
  }
  //type===1-increase
  //type===-1->decrease
  const handleEventQueue=(id,type)=>{
    console.log({id,type});
    seteventQueue({
      id,
      type
    })
  }
  return (
  <div>
  
  <Header count={cartItems.length} items={cartItems} onHandleEvent={handleEventQueue}></Header>
  <DemoCarousel></DemoCarousel>
  <CarouselBar></CarouselBar>
  <Products onAddItems={handleAddItems} onRemoveItems={handleRemoveItems} eventList={eventQueue}></Products>
  </div>
  );
}

export default App;
