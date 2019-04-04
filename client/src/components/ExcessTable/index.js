import React from "react";
import "./style.css";

function ExcessTable(props){
    return(
        <div className="col s9" id="excessTable">
            <table>
                <thead>
                <tr>
                    <th>Troop #</th>
                    <th>TAL</th>
                    <th>SM</th>
                    <th>LEM</th>
                    <th>SB</th>
                    <th>TM</th>
                    <th>PBP</th>
                    <th>CDL</th>
                    <th>PBS</th>
                    <th>GF</th>
                    <th>Contact Cookie Manager</th>
                    <th>Transfer Complete</th>
                </tr>
                </thead>

                <tbody>
                    {props.children}
                </tbody>
            </table>
        </div>

    )
}

export default ExcessTable