import React from "react";
import "./style.css";

function SideBtn(props) {
    return(
        <div className="btndiv">
            <a href="#" className="col s6 offset-s3 waves-effect waves-light btn">
                <i className="material-icons right">cloud</i>
                {props.name}
            </a>
        </div>  
    )
}
export default SideBtn;