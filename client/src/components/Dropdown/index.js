import React from "react";
import "./style.css";


function Dropdown(props) {
    return (
        <div id="formDropdown" className="row">
            <div className="input-field col s8">
                <select  {...props}>
                <option value="0">Choose your option</option>
                    <option value="SUM">Service Unit Manager</option>
                    <option value="TCM">Troop Cookie Manager</option>
                </select>
                <label htmlFor={props.id}>{props.name}</label>
                {/* <span class="errorMsg">{props.error}</span> */}
            </div>
        </div >
    );
}

export default Dropdown;
