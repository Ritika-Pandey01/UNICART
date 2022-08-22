import React from "react"

import DemoCarousel from "../Products/LandingCorousel";
import CarouselBar from "../Products/LineCarousel";
import Products from "../Products/Products";
const Home=()=>{
    return(<>
        
        <DemoCarousel />
          <CarouselBar />
          <Products />
    </>);
}
export default Home;