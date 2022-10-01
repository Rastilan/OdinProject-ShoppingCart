import './App.css';
import Card from './components/card';
import Items from './components/items';
import React, { useEffect, useState} from 'react';
import Navbar from './components/navbar';




function App() {


let [cart, setCart] = useState([]);

setCart = (val) => {
  cart.push(val);
}


  return (
    
    <div className="App">
      <Navbar cart = {cart.length}/>
      { Items.slice(0,6).map((item) => <Card imgURL={item.img} stars={item.stars} title={item.title} oem={item.oem} price={item.price} onClick={() => setCart(item)} /> ) }

    </div>
  );
}

export default App;
