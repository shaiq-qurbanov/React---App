import React, {useEffect, useState} from "react";
import '../About.css';
import icon from '../images/Vector.jpg'
import Drop from "./Drop";


const Transactions = ({posts,icon}) => {
    const [el, setEl]=useState({})
    const [op,setOp]=useState(false)
    const [num, setNum]=useState(null)
    const openDrop=(data)=>{
        setNum(data.id)
        setOp(!op)
        setEl(data)
        console.log('drop',el)
        console.log(111, op)
    }


    const objects = Object.values(posts)
    const arr=[]
    for(let i = 0; i < objects.length; i++){
        for(let j = 0; j < objects[i].length; j++){
            arr.push(objects[i][j])
            // console.log(3333,objects[i][j]);
        }
    }
    // console.log('arr',arr)

    return(
                 <div className="transactions" >

              {
                  arr.map((item, index)=>(
                      <>
                      <div key={index} className="items">
                      <div > name : {item.name }  ,   price :  {item.price}</div>
                      <button  onClick={()=>openDrop(item)}><img src={icon} alt={""} width={10} height={10}/></button>
                      </div>
                      {op && item.id===num && <Drop el={el}/>}
              </>
                          ))

              }


</div>

    )
}
export default Transactions