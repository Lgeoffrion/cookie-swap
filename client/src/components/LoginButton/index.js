import React from "react";
import "./style.css";


function Button(props) {
    return (
        <>
            <div
                className= "col l2 push-l2 s2 push-s2">
                <a className="waves-effect waves-light btn-large buttonDiv" {...props} ahref={props.href}>Login</a>
                <br /><br /><span className="errorMsg">{props.error}</span>
            </div>

        </>
    );
}

export default Button;