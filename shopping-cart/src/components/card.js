
// Simple function that contains the onclick and imgurl value
import React from 'react';
function Card(props) {

    return (
        <>
        <div class='card'>
            <div class="left">
                <img src={props.imgURL} alt="card" class="image"/>
            </div>
            <div class="right">
                <div>{props.title}</div>
                <div class="stars"></div><div class="stars"></div><div class="stars"></div><div class="stars"></div><div class="stars"></div>
                <div>{props.oem}</div>
                <div>{props.price}</div>
            </div>    
        </div>
        <br />
      </>
    );
  }

  export default Card;