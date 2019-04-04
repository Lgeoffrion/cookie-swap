import React from "react";
import "./style.css";


function Button(props) {
    return (
        <div className="buttonDiv">
            <a className="waves-effect waves-light btn-large" {...props} href={props.ahref}>Login</a>
        </div>
    );
}

export default Button;