import React, {useEffect, useLayoutEffect} from "react";
import '../Modul/ShowDetails';
import '../Modul/Filter'
import { useState, createContext, useContext } from "react";
import '../About.css';
import '../Modul/Transactions';
import icon from '../images/Vector.jpg'
import Transactions from "../Modul/Transactions";
import ShowDetails from "../Modul/ShowDetails";
import Filter from "../Modul/Filter";
import Drop from "../Modul/Drop";
import Array from "../Modul/Array";
import Checkbox from "../Modul/Checkbox"

const About=()=> {

    const transactionObjects = {
        2019: [
             {id: '19#apple', name: 'apple', price:4, quantity: 700},
             {id: '19#pear', name: 'pear', price:5, quantity: 560},
             {id: '19#quince', name: 'quince', price:7, quantity: 260}
        ],
        2020: [
            {id: '20#apple', name: 'apple', price:5, quantity: 900},
            {id: '20#pear', name: 'pear', price:9, quantity: 660},
            {id: '20#quince', name: 'quince', price:11, quantity: 360}
        ],
        2021: [
            {id: '21#apple', name: 'apple', price:6, quantity: 700},
            {id: '21#pear', name: 'pear', price:5, quantity: 560},
            {id: '21#quince', name: 'quince', price:7, quantity: 260}
        ],
        2022: [
            {id: '22#apple', name: 'apple', price:7, quantity: 900},
            {id: '22#pear', name: 'pear', price:9, quantity: 660},
            {id: '22#quince', name: 'quince', price:11, quantity: 360}
        ]
    }




    const getKeys = Object.keys(transactionObjects);
    console.log({getKeys})

    const [whichYear, setWhichYear] = useState(null)
    const [selectedYear, setSelectedYear] = useState([])
    const [op, setOp] = useState(false)
    const [show, setShow] = useState(false)
    const [arr, setArr]  = useState([])
    console.log('about',arr)
    const element = document.getElementById('red')
    const getYear = (year) => {
        setWhichYear(year)
        setShow(true)
        setShow(true)
        // element.classList.add('myStyle')
    }
    console.log(999,{whichYear})

    const getItem=()=>{
        setOp(!op)
        console.log(555)
    }
    const deleteItem=()=>{
        setArr([])
        console.log('delete', arr)
    }

    useEffect(()=> {
        for(let prop in transactionObjects){
            if(prop === whichYear){
                setSelectedYear(transactionObjects[prop])
            }
        }
    },[whichYear])

      return (
          <>

                  < div className="main" >
                      <h1>Transactions</h1>
                     <Transactions posts={transactionObjects} icon={icon} />
                     <Filter arr={arr} op={op} />
                     <Checkbox getItem={getItem} op={op} arr={arr} whichYear={whichYear}
                       show={show}  getYear={getYear} getKeys={getKeys} selectedYear={selectedYear}
                     deleteItem={deleteItem}/>


                  </div>
              </>
      )
}
export default About