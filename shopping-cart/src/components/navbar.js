// Simple function that contains the onclick and imgurl value
import React from 'react';
import { Link } from "react-router-dom";

function Navbar(props) {

    return (
        <>
        
        <div class="navbar"><Link to="/">Home </Link>  <Link to="/Shop">Shop</Link> <Link to="/Cart"> Shopping Cart </Link> 
         <div>Cart: {props.cart}</div>
        </div>
      </>
    );
  }

  export default Navbar;