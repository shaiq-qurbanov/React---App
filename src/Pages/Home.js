import React, {useEffect, useState} from "react";
const Home = () => {
const [home, setHome]=useState('')
    const [count, setCount]=useState(0)
    const [click, setClick]=useState(1)
    const Change=(event)=>{
        setHome(event.target.value)
    }


useEffect(()=>{
        setClick(count+2)
console.log(99)
})

      return(
          <>
              <div className="sidebar" id="mySidebar" >
                  <p>{count}</p>
                  <button onClick={()=>setCount(count+1)}>click</button>
                  <h1>{click}</h1>
                  <h1>{home}</h1>
                  <input value={home} onChange={Change}/>
              </div>
          </>
      )
}
export default Home

