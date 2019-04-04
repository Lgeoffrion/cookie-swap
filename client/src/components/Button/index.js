import React from "react";
import "./style.css";


function Button(props) {
    return (
        <>
        <div className="buttonDiv">
            <a className="waves-effect waves-light btn-large" {...props} ahref={props.href}>Login</a>
           
        </div>
        <br/><span className="errorMsg">{props.errorMsg}</span>
        </>
    );
}

export default Button;