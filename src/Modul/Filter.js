import React, {useState} from "react";
import '../About.css';
import ShowDetails from "../Modul/ShowDetails";

const Filter=({ selectedYear})=>{

    return (

            <div className="filter">

                {selectedYear.map((year, index) => (
                    <ul className="get-list">
                        <li>{year.price}</li>
                    </ul>
                ))}
            </div>


    )

}
export default Filter