import React, {useState} from "react";
import Array from "./Array";
import '../About.css';
import Apply from "./Apply";
import OpenList from "./OpenList";
const Checkbox=({getKeys, getYear,selectedYear,arr, show, whichYear, op, getItem, deleteItem})=>{
        const [check,setCheck]=useState(false)


        const openCheckbox=()=>{
                setCheck(!check)
        }

return(
    <>
        <div className="checkbox">
                <div className="years">YEARS</div>
                <button className="checkboxButton" onClick={openCheckbox}>ch</button>
        </div>
            {check && <div className="checkbox-list">

                    {getKeys.map((year,index)=>(
                        <>
                                <div className="list-items">
                                 <button id="red" onClick={()=> getYear(year)} key={index} className="checkbox-li"  >{year}</button>
                                        <div>
                                                { year===whichYear && <OpenList arr={arr} selectedYear={selectedYear}/>}

                                        </div>

                                </div>

                            </>
                    ))}


                    <Apply getItem={getItem} deleteItem={deleteItem} op={op} />
            </div>}

        </>)
}
export default Checkbox