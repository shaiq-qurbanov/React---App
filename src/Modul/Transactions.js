import React, {useEffect, useState} from "react";
import '../About.css';
import icon from '../images/Vector.jpg'
import Drop from "./Drop";


const Transactions = ({posts,icon}) => {
    const [el, setEl]=useState({})
    const [op,setOp]=useState(false)
    const [open,setOpen] =useState(false)
    const [num, setNum]=useState( false)

    const openDrop=(event,data)=>{
        setOp(!op)
        event.target.classList.toggle('rotate')
        setNum(data.id)
        setOpen(true)
        setEl(data)
    }


    const objects = Object.values(posts)
    const arr=[]
    for(let i = 0; i < objects.length; i++){
        for(let j = 0; j < objects[i].length; j++){
            arr.push(objects[i][j])
        }
    }

console.log(7777777,arr)
    return(
                 <div className="transactions" >

              {
                  arr.map((item, index)=>(
                      <>
                      {/*<div  className="items">*/}
                      <div className="transactions-item">
                          <div className=" item-1"key={index}> name : {item.name }  ,   price :  {item.price}</div>
                          <div className="item-2" onClick={(event)=>openDrop(event,item)}><img src={icon} width={10} height={10}  alt={""}/></div>
                      </div>
                      {/*</div>*/}
                      {op && item.id===num && <Drop el={el}/>}
              </>
                          ))

              }


</div>

    )
}
export default Transactions