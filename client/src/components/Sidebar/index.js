import React from "react";
import "./style.css";

function Sidebar(props) {
    return(

        <div className="col s4 teal lighten-2 row" id="SideBar">
        {props.children}    
        </div>

    )
    
}

export default Sidebar