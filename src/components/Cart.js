import React from "react";
import "./Cart.css";

const SlideDrawer = ({ show }) => {
  let drawerClasses = show ? "side-drawer open" : "side-drawer";

  return (
    <div className={drawerClasses}>
      <h1 style={{ color: "white" }}>Hello, I'm a drawer!</h1>
    </div>
  );
};

export default SlideDrawer;
