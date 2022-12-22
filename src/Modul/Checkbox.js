import React, {useState} from "react";
import Array from "./Array";
import '../About.css'
const Checkbox=({getKeys, getYear})=>{
        const [check,setCheck]=useState(false)
        const openCheckbox=()=>{
                setCheck(!check)
        }



return(
    <>
        <div className="checkbox">
                <div className="years">YEARS</div>
                <button className="checkboxButton" onClick={()=>{openCheckbox()}}>ch</button>
        </div>
            {check && <div className="filter-list">
                    {getKeys.map((year,index)=>(
                        <button key={index} className="filter-li" onClick={()=> getYear(year)} >{year}</button>
                    ))}

            </div>}
        </>
)
}
export default Checkbox