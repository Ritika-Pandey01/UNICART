
import React from "react";
import Header from "./layout/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from "./Products/Products";
import Home from "./layout/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import NotFound from "./layout/NotFound";


function App() {
  return (
    <BrowserRouter>
    <div>
    <Header/>
      
      <Routes>
      
      <Route path="/404" element={<NotFound/>} />
        
        <Route path="/" element={<Home />}/>
        
        <Route path=":category" element={<Products />}/>
        <Route path='*' element={<NotFound/>} />
       
        
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
