import React, {useEffect, useLayoutEffect} from "react";
import '../Modul/ShowDetails';
import '../Modul/Filter'
import { useState, createContext, useContext } from "react";
import '../About.css';
import '../Modul/Transactions';
import '../Modul/SecondTrans';
import '../Modul/Pagination';
import icon from '../images/Vector.jpg'
import Transactions from "../Modul/Transactions";
import ShowDetails from "../Modul/ShowDetails";
import Filter from "../Modul/Filter";
import Drop from "../Modul/Drop";
import Array from "../Modul/Array";
import Checkbox from "../Modul/Checkbox"
import SecondTrans from "../Modul/SecondTrans";
import Pagination from "../Modul/Pagination";

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
        ],
        2023: [
            {id: '23#apple', name: 'apple', price:66, quantity: 900},
            {id: '23#pear', name: 'pear', price:91, quantity: 660},
            {id: '23#quince', name: 'quince', price:31, quantity: 360}
        ],
        2024: [
            {id: '24#apple', name: 'apple', price:6, quantity: 90},
            {id: '24#pear', name: 'pear', price:1, quantity: 66},
            {id: '24#quince', name: 'quince', price:41, quantity: 60}
        ]
    }

    const objects = Object.values(transactionObjects)
    const getKeys = Object.keys(transactionObjects);
    const [op, setOp] = useState(false)
    const [whichYear, setWhichYear] = useState(null)
    const [selectedYear, setSelectedYear] = useState([])
    const [checkedState, setCheckedState] = useState([...getKeys].fill(false))
    const [show, setShow] = useState(false)
    const [arr, setArr]  = useState([])

        //Pagination
    // Пользователь сейчас находится на этой странице
    const [currentPage, setCurrentPage] = useState(1);
// Количество записей, отображаемых на каждой странице
    const [recordsPerPage] = useState(5);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    const array=[]
    for(let i = 0; i < objects.length; i++){
        for(let j = 0; j < objects[i].length; j++){
            array.push(objects[i][j])
        }
    }


    const currentRecords = array.slice(indexOfFirstRecord,indexOfLastRecord)
    const nPages = Math.ceil(array.length/recordsPerPage);


    const getYear = (year,data) => {
        const updateSetChecked=checkedState.map((item,index)=>
            index===data ? !item : item
        )
        setCheckedState(updateSetChecked)
            setWhichYear(year)
            setShow(false)
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
                     {/*<Transactions posts={transactionObjects} icon={icon} />*/}
                     <SecondTrans objects={objects} icon={icon} currentRecords={currentRecords}/>
                     <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                     <Filter selectedYear={selectedYear} setArr={setArr} arr={arr} op={op} show={show} whichYear={whichYear} transactionObjects={transactionObjects} />
                      {/*{ whichYear && <Filter arr={arr} selectedYear={selectedYear}/>}*/}
                     <Checkbox  setOp={setOp} arr={arr} whichYear={whichYear}
                      setShow={setShow}  getYear={getYear} getKeys={getKeys} selectedYear={selectedYear}
                       icon={icon} setArr={setArr} setCheckedState={setCheckedState} checkedState={checkedState}/>


                  </div>
              </>
      )
}
export default About