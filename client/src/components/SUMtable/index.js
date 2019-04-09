import React from "react";
import "./style.css";

function SUMtable(props){
    return(
        <div className="col s10 offset-s1" id="SUMtable">
            <table className="striped">
                <thead>
                <tr>
                    <th>TROOP #</th>
                    <th>COOKIE MANAGER</th>
                    <th>LOCATION</th>
                    <th>EMAIL</th>
                    <th>PHONE</th>
                    <th></th>
                    <th>CDL</th>
                    <th>GF</th>
                    <th>LEM</th>
                    <th>PBP</th>
                    <th>PBS</th>
                    <th>SB</th>
                    <th>SM</th>
                    <th>TAL</th>
                    <th>TM</th>
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