import React from "react";
import "./style.css";

//search field which will filter the SUMtable based off of troop number or cookie manager

function SUMsearchAdd() {

    return (
        <>
            <div className="row">
                <h5 className="col s6 offset-s2 center">Search by Troop# or Cookie Manager</h5>
                <h5 className="col s3 offset-s1">Add a Cookie Manager</h5>
            </div>
            <div className="row">
                <nav className="col s6 offset-s2">
                    <div className="nav-wrapper row">
                        <form className="green lighten-2" id="SUMsearch">
                            <div className="input-field">
                                <input id="search" type="search" required />
                                <label className="label-icon" htmlFor="search">

                                    <i className="material-icons">search</i>
                                </label>
                                <i className="material-icons">close</i>
                            </div>
                        </form>
                    </div>
                </nav>
                {/* Modal trigger button */}
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
                            <form className="col s12">
                                <div className="row modal-form-row">
                                    <div className="input-field col s5">
                                        <input id="troopnum" type="text" className="validate" />
                                        <label htmlFor="troop">Troop #</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input id="cm" type="text" className="validate" />
                                        <label htmlFor="cm">Cookie Manager</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s5">
                                        <input id="phone" type="text" className="validate" />
                                        <label htmlFor="phone">Phone</label>
                                    </div>

                                    <div className="input-field col s6">
                                        <input id="location" type="text" className="validate" />
                                        <label htmlFor="location">City/Location</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s11">
                                        <input id="email" type="email" className="validate"></input>
                                        <label htmlFor="email">Email</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <a className=" modal-action modal-close waves-effect waves-green btn-flat">Submit</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SUMsearchAdd