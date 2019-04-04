import React from "react";
import "./style.css";

function SideBtn(props) {
    return(
        <div className="sideBtn">
            <a href="#" className="col s8 offset-s2 waves-effect btn">
                <i className="material-icons right">arrow_forward</i>
                {props.name}
            </a>
        </div>  
    )
}
export default SideBtn;