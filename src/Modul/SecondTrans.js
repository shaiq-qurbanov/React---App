import React, {useEffect, useState,memo} from "react";
import "./Drop"
import Drop from "./Drop";
const SecondTrans=({currentRecords, icon, objects})=>{
    const [open, setOpen] = useState(false)
    const [dropId, setDropId]=useState(null)
    const [item, setItem] = useState('')
    const openDrop=(data)=>{
      setDropId(data)
        setOpen(!open)
        setDropId(data)
    }
    // console.log('id',dropId)
    // useEffect(()=>{
    //   for(let currentRecord of currentRecords){
    //       if(currentRecord.id === dropId){
    //           setItem(currentRecord)
    //       }
    //   }
    // })
    // useEffect(()=>{
    //     const array=[]
    //     for(let i = 0; i < objects.length; i++){
    //         for(let j = 0; j < objects[i].length; j++){
    //             array.push(objects[i][j])
    //             array.map(x=> {
    //                 if (x.id === dropId) {
    //                     setItem(x.id)
    //                     // console.log(x.id)
    //
    //                 }
    //             })
    //         }
    //     }
    // },[dropId])
    // console.log(item,8888)
console.log(item)
    return(

            <div className="transactions">
                {
                    currentRecords.map(currentRecords=>(
                        <>
                        <div>
                        <p key={currentRecords.id}>ID :{currentRecords.id}_____  Name :{currentRecords.name} ____Total :{currentRecords.price*currentRecords.quantity}</p>
                        <p onClick={()=>openDrop(currentRecords.id)}><img src={icon} width={18} /></p>
                        </div>
                            {open && dropId===currentRecords.id &&
                            <Drop itemId={currentRecords.id}
                            itemPrice={currentRecords.price}
                            itemQuantity={currentRecords.quantity}/>}
                        </>

                    ))


                }

            </div>
    )

}
export default memo(SecondTrans)