import React from "react";
import "./style.css";

function MainWrapper(props) {
    return<div className="row awrapper" id={props.id}>{props.children}</div>;
}

export default MainWrapper