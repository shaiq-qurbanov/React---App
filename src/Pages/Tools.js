import React, {useEffect, useRef} from 'react';
import { useState } from "react";
import Modal from '../Modul/Modal'
import '../Tools.css';
import '../Modul/Modal.css';
import logo1 from '../images/Vector (3).jpg';
import logo2 from '../images/Vector (5).jpg';
import logo3 from '../images/Ellipse 15.jpg';
import logo4 from '../images/delete.jpg';
import logo5 from '../images/bookmark.png';
import Tool_1 from "../Modul/Tool_1";

       const Tools=() => {
           const [modal, setModal] = useState(false)
           const [element, setElement] = useState('test');
           const [el, setEl] = useState()
           const [dataArr, setDataArr] = useState([])
          const myRef = useRef()


           const showModal =(data) => {
                   setModal(true);
                   setElement(element);
                   setEl(data.id)
                   setDataArr(data.arr);
                   console.log('dataArr',data.arr)
               // console.log(myRef.current)
               }


           const close =() =>{
               setModal(!modal)
           }

const names = [{text:'mnb',firstName:['name',"lastName"]},{x:'hkjkjk',y:'AAjkjkj'}]
const logos=[
    {id: 0, img:logo1, arr: ['balta', 'chakic', 'dahre']},
    {id: 1,img:logo2, arr: ['mix', 'corek']}
    ]
         return(
             <>
                 <div className="tools" ref={myRef}>
                     {logos.map((logo, index) => (
                         <div  className="xach" onClick={() => showModal(logo)}>
                             <img src={logo.img} alt={""} width={200} height={200}  />

                         </div>
                     ))}

                     {modal && <Modal closeModal={close} el={el} arr={dataArr}/> }
                 </div>


                 </>
            )
        }
        export default Tools
