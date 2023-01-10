import React, {useState} from "react";
import '../About.css';
import ShowDetails from "../Modul/ShowDetails";

const Filter=({op,arr})=>{
    console.log('array',arr)


    return (

            <div className="filter">

                {
                    arr.map((item, index)=>(
                      <div className="filter-block" key={index}>price : {item}$</div>
                    ))
                }
            </div>


    )

}
export default Filter