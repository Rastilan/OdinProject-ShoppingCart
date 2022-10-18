import '../App.css';
import Card from './Card';
import Items from './Items';


function Shop(props) {

  const handleClick = (props, cart, val) => {
  
  
    props.setCart([
      ...cart, val
    ]);
    props.setCartCost(currentCost => {
      return currentCost + val.price
  })
}


const handleRemove = (props, val) => {
  
  if(props.cart.findIndex(({id}) => id === val.id) > -1){
    props.cart.splice(props.cart.findIndex(({id}) => id === val.id), 1);
    props.setCart([
      ...props.cart
    ])
    props.setCartCost(currentCost => {
      return currentCost - val.price
  })
}

}


  return (
    
    <div className="Shop">
      { Items.slice(0,6).map((item) => <Card imgURL={item.img} stars={item.stars} title={item.title} oem={item.oem} price={item.price} onClick={() => handleClick(props, props.cart, item)} onRemove={() => handleRemove(props, item)}/> ) }

    </div>
  );
}

export default Shop;
