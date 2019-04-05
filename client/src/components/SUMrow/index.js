import React from "react";
import "./style.css";
//will pass props to populate table row with real data sometime
function SUMrow(props){
    return(
        <tr>
            <td>{props.troop}</td>
            <td>{props.name}</td>
            <td>{props.city}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
            <td className="grey lighten-1"id="invSpace"></td>
            <td>{props.cdl}</td>
            <td>{props.gf}</td>
            <td>{props.lem}</td>
            <td>{props.pbp}</td>
            <td>{props.pbs}</td>
            <td>{props.sb}</td>
            <td>{props.sm}</td>
            <td>{props.tal}</td>
            <td>{props.tm}</td>
        </tr>
    )
}

export default SUMrow



