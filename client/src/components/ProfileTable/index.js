import React, { Component } from "react";
import "./style.css";


function ProfileTable(props) {

   //displays cookie inventorys of the individual logged in
    if (props.profileInfo) {
        // console.log("props.profileInfo", props.profileInfo);
        // props.profileInfo["name"]
    }

    return (
        <div className="row profilePageRow">
            {/* Form inside of the modal to add new troop to the database */}
            {props.profileInfo &&
                <form className="col s12">
                    <div className="row">
                        <h5 className="col s2 offset-s1 offset-m2 profilePageLabel"> Troop# </h5>
                        <div className="input-field inline col l3 s3">
                            <input name="troop" type="number" className="profilePageInput"
                                defaultValue={props.profileInfo["troop"]}
                                onChange={props.inputChange} 
                                />
                        </div>
                    </div>
                    <div className="row">
                        <h5 className="col s2 offset-s1 offset-m2 profilePageLabel"> Name </h5>
                        <div className="input-field inline col s5">
                            <input name="name" type="text" className="profilePageInput"
                                defaultValue={props.profileInfo["name"]}
                                // onClick={props.inputChange}
                                onChange={props.inputChange}
                                 />
                        </div>
                    </div>
                    <div className="row">
                        <h5 className="col s2 offset-s1 offset-m2 profilePageLabel"> Email </h5>
                        <div className="input-field inline col s5">
                            <input name="email" type="email"  id="email"
                            // className="profilePageInput"
                             className={props.emailErrorMsg}
                                defaultValue={props.profileInfo["email"]}
                                onChange={props.inputChange} />
                                <span className="helper-text" data-error="Please enter a valid Email"></span>
                        </div>
                    </div>
                    <div className="row">
                        <h5 className="col s2 offset-s1 offset-m2 profilePageLabel"> Phone </h5>
                        <div className="input-field inline col s5">
                            <input name="phone" type="text" 
                            // className="profilePageInput"
                             className={props.phoneErrorMsg}
                                defaultValue={props.profileInfo["phone"]}
                                onKeyDown={props.inputPhoneChange}
                                // onClick={props.inputChange} 
                                // onChange={props.inputChange}
                                />
                                <span className="helper-text" data-error="Please enter Phone Number in this format(123-456-7890)"></span>
                        </div>
                    </div>
                    <div className="row">
                        <h5 className="col s2 offset-s1 offset-m2 profilePageLabel"> City  </h5>
                        <div className="input-field inline col s5">
                            <input name="city" type="text" className="profilePageInput"
                                defaultValue={props.profileInfo["city"]}
                                onChange={props.inputChange} />
                        </div>
                    </div>
                </form>
            }

        </div>
    );
}

export default ProfileTable



