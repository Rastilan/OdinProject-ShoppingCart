
// Simple function that contains the onclick and imgurl value
import React from 'react';
function Card({imgURL, title, oem, price, onClick, onRemove}) {

    

    return (
        <>
        <div class='card'>
            <div class="left">
                <img src={imgURL} alt="card" class="image"/>
            </div>
            <div class="right">
                <div>{title}</div>
                <div class="stars"></div><div class="stars"></div><div class="stars"></div><div class="stars"></div><div class="stars"></div>
                <div>{oem}</div>
                <div>{price}</div>
                <button onClick={onClick}>Add to cart</button>
                <button onClick={onRemove}>Remove</button>
            </div>    
        </div>
        <br />
      </>
    );
  }

  export default Card;