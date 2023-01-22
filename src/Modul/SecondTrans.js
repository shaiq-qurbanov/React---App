import React, {useState} from "react";
const SecondTrans=({currentRecords})=>{
    return(

            <div className="transactions">
                {
                    currentRecords.map(currentRecords=>(
                        <p key={currentRecords.id}>ID :{currentRecords.id}_____  Name :{currentRecords.name} ____Total :{currentRecords.price*currentRecords.quantity}</p>
                    ))
                }
            </div>
    )

}
export default SecondTrans