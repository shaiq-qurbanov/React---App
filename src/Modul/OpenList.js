import React, {useContext, useEffect, useState} from "react";
const OpenList=({selectedYear,getYear,getKeys, getNum, arr})=>{
    const [selectedId, setSelectedId]=useState(null)
// const arr=[]
  const check = (data) =>{

      arr.push(data)
      console.log('data',data)
  }

console.log('arr',arr)
    const x=
        selectedYear.map((item)=>(
            <label key={item.id} className="lab" htmlFor="checkbox">
                {item.name}: {item.price}$
                <input  className="inp" type="checkbox" onChange={()=>check(item.price)}  /> </label>

        ))




    return(

        <div className="open-list">

                    <>

                          {x}

                    </>
        </div>
    )
}
export default OpenList