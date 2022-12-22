import React from "react";
import './Modal.css'
import Tool_1 from "./Tool_1";
const  Modal=({closeModal, el, arr})=>{
    return(
        <div id='modal' className='modal'>
            <div className="header">
                <button className='btn' onClick={closeModal}>Close</button>
            </div>
            <div id="one" className="modal-content">
                <Tool_1 el={el} arr={arr}/>
            </div>
        </div>

    )
}
export default Modal