import React, {useEffect, useState} from "react";
import './Transactions';
import '../About.css'
import Datepicker from "./Datepicker";
const Drop=({itemId, itemPrice, itemQuantity, itemDate, date, setDate, index, dataArray}) => {

    console.log('ddd',date.toLocaleDateString())


    const [open, setOpen] = useState(true)
    const [text,setText] = useState('Edit Date')
    const [z, setZ] = useState(itemDate)
    const [num, setNam]=useState(null)

    const [changedArray, setChangedArray]=useState(dataArray)

    const result = changedArray.map((arr, idx)=>{
        if(idx===index){
            return <p key={idx} onClick={()=>setNam(idx)}>{arr}</p>
        }

    })

    const changeItem =()=>{
        setChangedArray([...changedArray.slice(0,num),date.toLocaleDateString(),...changedArray.slice(num+1)])
        console.log('changedArray', changedArray)
    }
console.log('num',num)

    const x=<Datepicker date={date} setDate={setDate}/>
        console.log('e',date.toLocaleDateString())


    return(

    <div  className="dropdown">
            <p>ID : {itemId} </p>
            <p>PRICE:  {itemPrice}</p>
            <p>QUANTITY:{itemQuantity}</p>
            {/*<div onClick={()=>setText(<Datepicker date={date} setDate={setDate}/>)}>{text} </div>*/}
            {/*<input  date={date} setDate={setDate} value={<Datepicker/>}/>*/}
            <Datepicker date={date} setDate={setDate}/>
            <p onClick={()=> changeItem()}>xx</p>
            <p className="item1" >Date:{z} </p>
                  {result}

    </div>
    )
}
export default Drop