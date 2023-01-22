import React, {useState} from "react";
import './Transactions';
import '../About.css'
const Drop=({el}) => {
    return(

    <div key={el.id} className="dropdown">
        <p>{el.name}</p>
    </div>
    )
}
export default Drop