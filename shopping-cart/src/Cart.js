import './App.css';
import Card from './components/card';
import Items from './components/items';
import Navbar from './components/navbar';

function Cart() {
  return (
    
    <div className="App">
      { Items.slice(0,6).map((item) => <Card imgURL={item.img} stars={item.stars} title={item.title} oem={item.oem} price={item.price} /> ) }

    </div>
  );
}

export default Cart;
