// Simple function that contains the onclick and imgurl value
import React, {useState} from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
import ShoppingCartIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import { Badge } from '@mui/material';



function Navbar({cart, onCartIconClick, itemCount}) {
  
  

    


  
    return (
        <>

        <div class="navbar">
          
          <div class="navbar-left">
            <Link to="/">Logo</Link>
          </div>
          <div class="navbar-right">
            <Link to="/">Home</Link>
            <Link to="/Shop">Products</Link>  
            
            <a href="#" onClick={onCartIconClick}>
              <Badge color="secondary" badgeContent={itemCount}>
                <ShoppingCartIcon />{""}
              </Badge> 
            </a>
          </div>

        </div>
      </>
    );
  }

  export default Navbar;