import React from "react";
import "./style.css";

//search field which will filter the SUMtable based off of troop number or cookie manager

function SUMsearchAdd(props) {

    return (
        <>
            <div className="row" id="topRow">
                <h5 className="col s6 offset-s2 center">Search by Troop# or Cookie Manager</h5>
                <h5 className="col s3 offset-s1">Add a Cookie Manager</h5>
            </div>
            <div className="row">
                <nav className="col s6 offset-s2">
                    <div className="nav-wrapper row">
                        <form className="green lighten-2" id="SUMsearch">
                            <div className="input-field">
                                <input id={props.id} name="search" value={props.search} onChange={props.handleSearchInputChange} ref={props.handleSearch} type="search" required />
                                <label className="label-icon" htmlFor="search">
                                    <i onClick={props.handleSearchClick} className="material-icons">search</i>
                                </label>
                                <i onClick={props.searchX} className="material-icons">close</i>
                            </div>
                        </form>
                    </div>
                </nav>
                {/* Button which triggers a modal and is linked to the modal structure by the modal structure id through href*/}
                <div className="col s3 offset-s1" id="AddTroop">
                    <a className="waves-effect btn modal-trigger" href="#addModal">
                        <i className="material-icons right">arrow_forward</i>
                        Add Cookie Manager
                    </a>
                </div>
                {/* <!-- Modal Structure --> */}
                <div id="addModal" className="modal">
                    <div className="modal-content">
                        <h4 className="center">Add a Cookie Manager</h4>
                        <div className="row">
                            {/* Form inside of the modal to add new troop to the database */}
                            <form className="col s12">
                                <div className="row modal-form-row">
                                    <div className="input-field col s5">
                                        <input name="troop" value={props.troop} type="number"  onChange={props.handleInputChange} className="validate" />
                                        <label htmlFor="troop">Troop #*</label>
                                        <div id="talert" className="red-text text-accent-4">Please input troop.</div>
                                    </div>

                                    <div className="input-field col s6">
                                        <input name="name" type="text" value={props.name} onChange={props.handleInputChange} className="validate" />
                                        <label htmlFor="cm">Cookie Manager*</label>
                                        <div id="calert" className="red-text text-accent-4">Please input cookie manager.</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s5">
                                        <input name="phone" type="text" 
                                        // value={props.phone} 
                                        // onChange={props.handleInputChange}
                                        // className="validate" 
                                        className={props.phoneErrorMsg}
                                        defaultValue={props.phone}
                                        onKeyDown={props.inputPhoneChange}
                                        />
                                        <label htmlFor="phone">Phone*</label>
                                        <div id="palert" className="red-text text-accent-4">Please input phone number.</div>
                                        <div id="pformatalert" className="red-text text-accent-4">Please input phone number in format(123-456-7890).</div>
                                    </div>

                                    <div className="input-field col s6">
                                        <input name="city" type="text" value={props.city} onChange={props.handleInputChange} className="validate" />
                                        <label htmlFor="location">City/Location*</label>
                                        <div id="lalert" className="red-text text-accent-4">Please input a city/location.</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s11">
                                        <input name="email" type="email" value={props.email} onChange={props.handleInputChange} className="validate"></input>
                                        <label htmlFor="email">Email*</label>
                                        <div id="ealert" className="red-text text-accent-4">Please input an email.</div>
                                        <div id="eformatalert" className="red-text text-accent-4"> Please input Email in Format (abc@xyz.com)</div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <a className="modal-action waves-effect waves-green btn-flat" id="tcmSubmit" disabled={props.disabled} onClick={props.handleFormSubmit}>Submit</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SUMsearchAdd