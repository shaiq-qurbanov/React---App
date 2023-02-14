import React, {useState} from "react";
import './Transactions';
import '../About.css'
const Drop=({itemId, itemPrice, itemQuantity}) => {
    return(

    <div  className="dropdown">
            <div>ID : {itemId} </div>
            <div>PRICE:  {itemPrice}</div>
            <div>QUANTITY:{itemQuantity}</div>
        <div>xx</div>
    </div>
    )
}
export default Drop