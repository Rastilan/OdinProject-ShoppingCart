// Simple function that contains the onclick and imgurl value
import React from 'react';

export default function ShoppingCartItem({props}) {


    return (
        <>
        
        <div class='card'>
            <div class="left">
                <img src={props.Item.img} alt="card" class="image"/>
            </div>
            <div class="right">
                <div>{props.Item.title}</div>
                <div class="stars"></div><div class="stars"></div><div class="stars"></div><div class="stars"></div><div class="stars"></div>
                <div>{props.Item.oem}</div>
                <div>{props.Item.price}</div>
                <div>amount: {props.AmountOfItem}</div>

            </div>    
        </div>
        <br />
      </>
    );
  }
