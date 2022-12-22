import React, {useEffect, useLayoutEffect} from "react";
import '../Modul/ShowDetails';
import '../Modul/Filter'
import { useState } from 'react';
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
    //{ id : 1, year:2019, name: 'alma',price:15,quantity: 500 },
    // const transactionsArray = [
    //    { id : 1, year:2019, saleDate : '2019', amount : 70090, img: icon,number:true },
    //     { id : 2, year:2020, saleDate : '20201', amount: 90090, img: icon, number:true },
    //     { id : 3, year:2021, saleDate : '2021', amount: 80070, img: icon, number:true },
    //     { id : 4, year:2022, saleDate: '2022', amount: 260090, img: icon, number:true}
    //
    // ]
    // const details = [
    //     {id: 2019, 'name': 'alma','price':15+'$', 'quantity': 500+"kg",'total':7500+"$"},
    //     {id: 2020, 'name': 'armud','price':20+"$", 'quantity': 500+"kg",'total':10000+"$"},
    //     {id: 2021, 'name': 'heyva','price':15+'$', 'quantity': 500+"kg",'total':7500+"$"},
    //     {id: 2022, 'name': 'xurma','price':25+"$", 'quantity': 500+'kg','total':12500+"$"}
    // ]
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

    const getYear = (year) => {
        setWhichYear(year)
    }
    console.log(999,{whichYear})


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
                     {/*<Transactions posts={yearsObj} />*/}

                      <Filter selectedYear={selectedYear} whichYear={whichYear} transactionObjects={transactionObjects}  />
                      {/*{showDetail}*/}
                      <Checkbox getYear={getYear}   getKeys={getKeys} />
                      {/*<Array/>*/}

                  </div> 
              </>
      )
}
export default About