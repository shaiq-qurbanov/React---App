import React, {useEffect, useState,memo} from "react";
import "./Drop"
import Drop from "./Drop";
import Checkbox from "./Checkbox";
const SecondTrans=({currentRecords, icon, objects, date, setDate, dataArray})=>{
    console.log('currentRecords',currentRecords)
    const [open, setOpen] = useState(false)
    const [dropId, setDropId]=useState(null)
    const [item, setItem] = useState('')
    const openDrop=(data)=>{
      setDropId(data)
        setOpen(!open)
        setDropId(data)
    }

console.log(item)
    return(

            <div className="transactions">
                {
                    currentRecords.map((currentRecords,index)=>(
                        <>
                        <div className="transactions-item">
                        <p key={currentRecords.id}>ID :{currentRecords.id}_____  Name :{currentRecords.name} ____Total :{currentRecords.price*currentRecords.quantity}</p>
                        <p onClick={()=>openDrop(currentRecords.id)}><img src={icon} width={18} /></p>
                        </div>
                            {open && dropId===currentRecords.id &&
                            <Drop itemId={currentRecords.id}
                            itemPrice={currentRecords.price}
                            itemQuantity={currentRecords.quantity}
                            itemDate={currentRecords.itemDate}
                            date={date} setDate={setDate}
                            index={index}
                                  dataArray={dataArray}
                            />}
                        </>

                    ))


                }

            </div>
    )

}
export default memo(SecondTrans)