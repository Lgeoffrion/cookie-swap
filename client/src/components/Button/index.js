import React from "react";
import "./style.css";


function Button(props) {
    return (
        <div className="buttonDiv">
            <a className="waves-effect waves-light btn-large" {...props} >Login</a>
        </div>
    );
}

export default Button;