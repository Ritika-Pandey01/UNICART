import React from "react";
import Cart from "../Cart";
import { NavLink } from "react-router-dom";
function Header({count,items,onHandleEvent}) {
  return (<div>
    <nav className="navbar">

      <div className="logo"><img src={"assets/logo.png"}></img> <NavLink  to="/">UNICART</NavLink></div>
      <div className="searchBox-container">
        <form className="form-search">
          <input className="search" type="text"
            id="search" placeholder="Enter product name, category" />
          <button type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="20"
              height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none"
              strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="10" cy="10" r="7" />
              <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
          </button>
        </form>
      </div>

      <ul className="nav-links">
        <div className="menu">
        <button><li><NavLink exact to="/category-1">Food</NavLink></li></button>
          <button><li><NavLink exact to="/category-2">Essentials</NavLink></li></button>
          <button><li><NavLink exact to="/category-3">Clothes</NavLink></li></button>
          <Cart Itemcount={count} items={items} onHandleEvent={onHandleEvent}/>
        </div>
      </ul>
    </nav>

  </div>
  );
}

export default Header;