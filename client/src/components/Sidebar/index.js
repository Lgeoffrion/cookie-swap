import React from "react";
import "./style.css";

//Side column which is passed SideBtn's as children
function Sidebar(props) {
    return(

        <div className="col s4 teal lighten-2 row" id="SideBar">
        {props.children}    
        </div>

    ) 
}

export default Sidebar