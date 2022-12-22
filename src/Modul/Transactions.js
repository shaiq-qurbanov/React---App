import React, {useEffect, useState} from "react";
import '../About.css';
import Drop from "./Drop";


const Transactions = ({posts}) => {
    const [open,setOpen]=useState(false)
    const [op,setOp]=useState()
    const showPost=(data)=>{
        setOp(data.id)
        setOpen(!open)
    }



    return(
          <div className="about">
              {posts.map((post, index) => (
                      <>
              <div className="transactions" >
                  <div>Transactions year :{post.year}</div>
                  <button onClick={ ()=> showPost(post)}><img src={post.img} alt={""} width={10} height={10}/></button>
              </div>
                     {op === post.id && open  && <Drop posts={post}/>}
                     </>
              ))}
          </div>
    )
}
export default Transactions