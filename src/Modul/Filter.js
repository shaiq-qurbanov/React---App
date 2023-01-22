import React, {useEffect, useState} from "react";
import '../About.css';
import ShowDetails from "../Modul/ShowDetails";

const Filter=({show,arr})=>{
    return (

            <div className="filter">

                {
                    arr.map((item, index)=>(
                      <div className="filter-block" key={index}> {item.id}$</div>

                    ))
                }
                {!show && <div>No Transaction found</div>}
            </div>


    )

}
export default Filter