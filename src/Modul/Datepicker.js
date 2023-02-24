import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

 const Datepicker=({date, setDate})=> {

  console.log(date)
 return(
    <DatePicker
        showIcon
        selected={date}
        onChange={date=>setDate(date)}/>
 )


}
export default Datepicker