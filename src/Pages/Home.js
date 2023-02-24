import React, {useReducer} from "react";
import DatePicker from '../Modul/Datepicker'
const initialState={
    firstCounter:0,
    secondCounter:0
};
const reducer = (state,action)=> {
    switch (action.type) {
        case 'increment':
            return {...state, firstCounter: state.firstCounter + action.value};
        case 'decrement':
            return {...state, secondCounter:state.secondCounter + action.value};
        default:
            return {...state}
    }

}
const  Home=({arr})=>{
    const [count, dispatch]= useReducer(reducer,initialState);

    return(
        <>
            <DatePicker/>
            <p>{count.firstCounter}</p>
            <p>{count.secondCounter}</p>
        <button onClick={()=>dispatch({type: 'increment', value:2})}>+</button>
        <button onClick={()=>dispatch({type: 'decrement', value:4})}>-</button>
            <div>
                {
                    arr.map(item=>
                        <p>{item}</p>)
                }
            </div>
            </>

    )
}
export default Home