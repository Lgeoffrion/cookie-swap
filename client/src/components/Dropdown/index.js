import React from "react";
import "./style.css";


function Dropdown(props) {
    return (
        <div className="row">
            <div className="input-field col s8">
                <select  {...props}>
                    <option defaultValue="">Select One</option>
                    <option value="SUM">Service Unit Manager</option>
                    <option value="TCM">Troop Cookie Manager</option>
                </select>
                <label htmlFor={props.id}>{props.name}</label>
            </div>
        </div >
    );
}

export default Dropdown;
