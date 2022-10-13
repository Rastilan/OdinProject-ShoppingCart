import './App.css';
import Card from './components/card';
import Items from './components/items';
import React, { useEffect, useState} from 'react';
import Navbar from './components/navbar';




function App() {


let [cart, setCart] = useState([]);
let [cartCost, setCartCost] = useState(0);

const handleClick = (cart, val) => {


    setCart([
      ...cart, val
    ]);
  setCartCost(cartCost + val.price)
}

const handleRemove = (cart, val) => {

  if(cart.findIndex(({id}) => id === val.id) > -1){
    cart.splice(cart.findIndex(({id}) => id === val.id), 1);
    setCart([
      ...cart
    ])
    setCartCost(cartCost - val.price);
  }
  
  

  
}


  return (
    
    <div className="App">
      <Navbar cart = {cartCost.toFixed(2)}/>
      { Items.slice(0,6).map((item) => <Card key={item.id} imgURL={item.img} stars={item.stars} title={item.title} oem={item.oem} price={item.price} onClick={() => handleClick(cart, item)} onRemove={() => handleRemove(cart, item)}/> ) }

    </div>
  );
}

export default App;
