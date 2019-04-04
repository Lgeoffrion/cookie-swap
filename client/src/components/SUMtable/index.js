import React from "react";
import "./style.css";

function SUMtable(props){
    return(
        <div className="col s10 offset-s1" id="SUMtable">
            <table>
                <thead>
                <tr>
                    <th>TROOP #</th>
                    <th>COOKIE MANAGER</th>
                    <th>LOCATION</th>
                    <th>EMAIL</th>
                    <th>PHONE</th>
                </tr>
                </thead>

                <tbody>
                    {props.children}
                </tbody>
            </table>
        </div>

    )
}

export default SUMtable