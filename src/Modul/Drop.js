import React, {useState} from "react";
import './Transactions';
import '../About.css'
const Drop=({el}) => {
    console.log('drrrrooop',el)
    return(

    <div key={el.id} className="dropdown">
        {/*<ul className="list" >*/}
        {/*    <li key={posts.id}> ID : {posts.id}</li>*/}
        {/*    <li key={posts.saleDate}> Date : {posts.saleDate}</li>*/}
        {/*    <li key={posts.amount}> Amount : {posts.amount}</li>*/}
        {/*</ul>*/}
        <p>{el.name}</p>
    </div>
    )
}
export default Drop