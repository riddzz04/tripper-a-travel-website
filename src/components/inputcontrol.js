import React from "react";
import "./inputcontrolstyles.css";
function Inputcontrol(props){
    return(
        <div className="container-input">
            {props.label && <label>{props.label}</label>}
            <input type="text"{...props}/>
        </div>
    )
}
export default Inputcontrol;