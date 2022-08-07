
import React from "react";

import Products from "./Products/Products";
import Header from "./layout/Header";
import DemoCarousel from "./Products/LandingCorousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselBar from "./Products/LineCarousel";



function App(){
  return (
  <div>
  
  <Header/>
  <DemoCarousel/>
  <CarouselBar/>
  <Products/>
  </div>
  );
}

export default App;
