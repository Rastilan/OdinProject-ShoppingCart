import './App.css';
import Navbar from './components/Navbar';
import React, { useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Shop from './components/Shop';
import Home from './components/Home';
import BackDrop from './components/Backdrop';







function App() {

  let [cart, setCart] = useState([]);
  let [cartCost, setCartCost] = useState(0);
  let [showCart, setShowCart] = useState(false);
  let [itemCount, setItemCount] = useState(0);
  
  
const handleBackdropClick = () => {
  setShowCart(false);
}
  
const handleCartButton = () => {
  setShowCart(!showCart);
}

  




  return (
    
    <div className="App">
      <Navbar onCartIconClick={handleCartButton} cart={cart} itemCount={itemCount}/>
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/Shop" element={<Shop cart={cart} setCart={setCart} cartCost={cartCost} setCartCost={setCartCost} setItemCount={setItemCount}/> } />
      </Routes>
      <Cart show={showCart} onClick={handleBackdropClick} cart={cart} cartCost={cartCost}/>
      {showCart && <BackDrop closeDrawer={handleBackdropClick} />}

    </div>
  );
}

export default App;
