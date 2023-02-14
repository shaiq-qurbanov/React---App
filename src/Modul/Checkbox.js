import React, {useEffect, useState} from "react";
import Array from "./Array";
import '../About.css';
import Apply from "./Apply";
import OpenList from "./OpenList";
const Checkbox=({getKeys, getYear, setOp,setShow,setArr,setCheckedState, arr, checkedState})=>{

        const [check,setCheck]=useState(false)

        const openCheckbox=()=>{
                setCheck(!check)
                setShow(false)
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
                                <>
                                        <div id="red" className="checkbox-li" >
                                            <div key={year}>{year}</div>
                                                <input type="checkbox" checked={checkedState[index]} onChange={()=>getYear(year,index)}/>
                                        </div>
                                </>

                        </>
                    ))}


                    <Apply setArr={setArr} arr={arr} setOp={setOp} setShow={setShow} setCheckedState={setCheckedState} getKeys={getKeys} />
            </div>}

    </>)
}
export default Checkbox
