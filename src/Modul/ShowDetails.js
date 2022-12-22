import React, {useState} from "react";
import '../About.css';

const ShowDetails = ({el,post,openDetails}) => {

return(
    <>

        <div className="show-item">
                    <>
                        <div className="list-2">
                            <div className="details">{post.id}</div>
                        </div>
                <button className="details-btn"  onClick={()=>openDetails(post)}>Details</button>
                    </>
        </div>
        </>
)

}

export default ShowDetails