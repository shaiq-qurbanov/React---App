import React from "react";
import { useState } from "react";
import './Tool_1.css';
const Tool_1=({el, arr})=>{
    return(
        <>
            <div >
                { arr.map((element, index)=> (
                    <p key={index}>{element}</p>
                ))}

            </div>
            </>


    )
}
export default Tool_1