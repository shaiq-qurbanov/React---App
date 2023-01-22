import React, {useState} from "react";
import Array from "./Array";
import '../About.css';
import Apply from "./Apply";
import OpenList from "./OpenList";
const Checkbox=({getKeys, getYear,selectedYear,arr, show, whichYear, op, getItem, deleteItem, icon})=>{
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
                                <div>
                                        <div id="red" className="checkbox-li"  ><div>{year}</div> <div  onClick={()=> getYear(year)} key={index}><img src={icon} width={30} height={25}/></div></div>

                                        {/*<div>*/}
                                        {/*        { year===whichYear && <OpenList arr={arr} selectedYear={selectedYear}/>}*/}

                                        {/*</div>*/}

                                </div>

                        </>
                    ))}


                    <Apply getItem={getItem} deleteItem={deleteItem} op={op} />
            </div>}

    </>)
}
export default Checkbox
{/*<input  className="inp" type="checkbox"   />*/}
{/*<div>*/}
{/*        {show && year===whichYear && <OpenList icon={icon} arr={arr} selectedYear={selectedYear}/>}*/}

{/*</div>*/}