import React from "react";
import "./Characters.css";

const Characters = (props)=> {
return(
    <div className="card" onClick={props.imageClick}>
        <div className="imgs">
            <img alt={props.image.replace(".jpg", "")} src={require("../../images/"+ props.image)}></img>
        </div>
    </div>
);
}

export default Characters;