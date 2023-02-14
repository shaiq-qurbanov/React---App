import React, {useState} from "react";
import '../About.css';
const Apply=({setArr,setShow, getKeys, setCheckedState})=>{

    const showItems=()=>{
        setShow(true)
    }

    const Cancel=()=>{
        setArr([])
        setShow(false)
        setCheckedState([...getKeys].fill(false))
    }

    return(
        <div className="apply">
            <button onClick={()=>showItems()} className="apply-btn" >Apply</button>
            <button className="apply-btn" onClick={()=>Cancel()}>Cancel</button>
        </div>
    )
}
export default Apply