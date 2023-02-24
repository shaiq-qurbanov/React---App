import React, {useEffect, useState} from "react";
import '../About.css';
import ShowDetails from "../Modul/ShowDetails";

const Filter=({show, arr, selectedYear, setArr,op})=>{
    const [x, setX]=useState([])

    useEffect(()=>{
            setArr([...arr,...selectedYear])
    },[selectedYear])
    // console.log(555,arr)

    return (

            <div className="filter">

                {show &&
               arr.map(item=>(
                   <>
                       <p className="filter-block" key={item.id}> {item.id }: { item.price}$</p>
                    {/*<br/>*/}
                    </>
               ))
                }
                {show===false && <div className="alert">No Transaction found</div>}
            </div>


    )

}
export default Filter