import '../App.css';
import Card from './Card';
import Items from './Items';

//The shop page, functions include adding and removing items to the cart
function Shop(props) {

  const addItemToCart = ({cart, setCart, setCartCost, setItemCount}, val) => {

    //Looks to see if the item is already an object in the cart array
    let objToAdd = cart.findIndex(obj => {
      return obj.Item.id === val.id
    })
    
    //runs if the object is already in the array
    if(objToAdd >= 0){
      //grabs the current ammount and increments by 1
      let increasedAmount = cart[objToAdd].AmountOfItem + 1;
      // Takes the existing Object out of the array and replaces it with the new one containing the new AmountOfItem
      cart.splice(objToAdd, 1, {
        Item: val,
        AmountOfItem: increasedAmount
      });
    } else { //runs if the object does not already exist in the array
      setCart([...cart, {
        Item: val,
        AmountOfItem: 1
      }],[]);
    }
    // Sets the overall cost of the cart
    setCartCost(currentCost => {
      return (currentCost + val.price)
  })
    setItemCount(currentAmount => {
      return (currentAmount + 1)
    })
}


const removeItemFromCart = ({cart, setCart, setCartCost, setItemCount}, val) => {

  function ReduceCartCostByItem() {
    setCartCost(currentCost => {
      return currentCost - val.price
    });
  }

  //Looks to see if the item is already an object in the cart array
  let objToRemove = cart.findIndex(obj => {
    return obj.Item.id === val.id
  })
  //runs if the object is already in the array
  if(objToRemove >= 0){
    //grabs the current ammount and reduces by 1
    let reducedAmount = cart[objToRemove].AmountOfItem - 1;
    //checks if there is none of the item left in the cart
    if(reducedAmount < 1){
      //removes item from cart
      cart.splice(objToRemove, 1);
      setCart([...cart]);
      // Takes the existing Object out of the array and replaces it with the new one containing the new AmountOfItem
    } else {
        cart.splice(objToRemove, 1, {
          Item: val,
          AmountOfItem: reducedAmount
      });
      
    }
    ReduceCartCostByItem();
    setItemCount(currentAmount => {
      return (currentAmount - 1)
    })
  } else {
    setCart([...cart]);

  }

}


  return (
    
    <div className="Shop">
      { Items.slice(0,6).map((item) => <Card imgURL={item.img} stars={item.stars} title={item.title} oem={item.oem} price={item.price} onClick={() => addItemToCart(props, item)} onRemove={() => removeItemFromCart(props, item)}/> ) }

    </div>
  );
}

export default Shop;
