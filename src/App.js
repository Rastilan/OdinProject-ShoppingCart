import './App.css';
import Navbar from './components/Navbar';
import React, { useEffect, useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Shop from './components/Shop';
import Home from './components/Home';
import BackDrop from './components/Backdrop';







function App() {

  let [cart, setCart] = useState([]);
  let [cartCost, setCartCost] = useState(0);
  let [showCart, setShowCart] = useState(false);
  
const handleBackdropClick = () => {
  setShowCart(false);
}
  
const handleCartButton = () => {
  setShowCart(!showCart);
}

  
  useEffect(() => {
    console.log(cartCost)
  }, [cartCost])  



  return (
    
    <div className="App">
      <Navbar onCartIconClick={handleCartButton} />
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/Shop" element={<Shop cart={cart} setCart={setCart} cartCost={cartCost} setCartCost={setCartCost}/> } />
      </Routes>
      <Cart show={showCart} />
      {showCart && <BackDrop closeDrawer={handleBackdropClick} />}

    </div>
  );
}

export default App;
