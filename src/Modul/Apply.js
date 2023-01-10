import React from "react";
import '../About.css';
const Apply=({getItem, deleteItem})=>{
console.log('Apply')
    return(
        <div className="apply">
            <button onClick={()=>getItem()} className="apply-btn" >Apply</button>
            <button className="apply-btn" onClick={()=>deleteItem()}>Cancel</button>
        </div>
    )
}
export default Apply