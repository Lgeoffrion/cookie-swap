import React from "react";
import "./style.css";
//id is for the tabs to swap between wrappers
function MainWrapper(props) {
    return<div className="row awrapper" id={props.id}>{props.children}</div>;
}

export default MainWrapper