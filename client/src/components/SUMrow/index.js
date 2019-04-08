import React from "react";
import "./style.css";
//recieves props from SUMlanding state and generates rows
function SUMrow(props) {
    return (
        <tr key={props.id}>
            <td>{props.troop}</td>
            <td>{props.name}</td>
            <td>{props.city}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
            <td className="grey lighten-1" id="invSpace"></td>
            <td>{props.cdl}</td>
            <td>{props.gf}</td>
            <td>{props.lem}</td>
            {/* <td>
                <input 
                    className="SUMPageInput" 
                    onChange={props.addInputChange} 
                    type="number" 
                    min='0'
                    defaultValue ={props.lem} 
                  />
            </td> */}

            <td>{props.pbp}</td>
            <td>{props.pbs}</td>
            <td>{props.sb}</td>
            <td>{props.sm}</td>
            <td>{props.tal}</td>
            <td>{props.tm}</td>
            {/* <td className="updateButton"> 
                <form>
                    <a className="waves-effect waves-light btn-small" onClick={props.updateProfile}>Update</a>
                </form>
            </td> */}
        </tr>
    )
}

export default SUMrow



