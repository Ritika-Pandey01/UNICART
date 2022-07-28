
import React, { useState } from "react";

import Products from "./Products/Products";
import Header from "./layout/Header";
import DemoCarousel from "./Products/LandingCorousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselBar from "./Products/LineCarousel";



function App(){
  const [cartItems,setCartItems]=useState(0);
  function handleAddItems(){
    setCartItems(cartItems+1);
  }
  function handleRemoveItems(){
    setCartItems(cartItems-1);
  }
  return (
  <div>
  
  <Header count={cartItems}></Header>
  <DemoCarousel></DemoCarousel>
  <CarouselBar></CarouselBar>
  <Products onAddItems={handleAddItems} onRemoveItems={handleRemoveItems}></Products>
  </div>
  );
}

export default App;
