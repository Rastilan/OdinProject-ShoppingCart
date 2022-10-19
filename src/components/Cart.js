import React from "react";
import "./Cart.css";
import ShoppingCartItem from "./ShoppingCartItem";

const SlideDrawer = ({ show, onClick, cart, cartCost }) => {
  let drawerClasses = show ? "side-drawer open" : "side-drawer";

  return (
    <>
      <div className={drawerClasses}>
        <button class="close-cart" onClick={onClick}>X</button>
        <h1 style={{ color: "white" }}>Your Shopping Cart!</h1>
        

        { cart.map((item) => <ShoppingCartItem props={item}/> ) }

        <div>Total Cost: {cartCost}</div>
        
        



      </div>
    </>
  );
};

export default SlideDrawer;
