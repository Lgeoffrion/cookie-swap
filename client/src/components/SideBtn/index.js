import React from "react";
import "./style.css";

function SideBtn(props) {
    return(
        <div className="sideBtn">
            <a href="#" className="col s6 offset-s3 waves-effect btn">
                <i className="material-icons right">cloud</i>
                {props.name}
            </a>
        </div>  
    )
}
export default SideBtn;