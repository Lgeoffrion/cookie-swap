import React from "react";
import "./style.css";

//search field which will filter the SUMtable based off of troop number or cookie manager

export function ChangePwd(props) {

    return (
        <>
            {/* Button which triggers a modal and is linked to the modal structure by the modal structure id through href*/}
            <div className="col l3 offset-l2 m3 s12" id="changePassword">
                <a className="waves-effect waves-light btn-large buttonDiv modal-trigger" href="#changePwd">
                    Change Password
                    </a>
                    <br /> <br />
            </div>
            {/* <!-- Modal Structure --> */}
            <div id="changePwd" className="modal">
                <div className="modal-content">
                    <h4 className="center">Change Password <a className="modal-close waves-effect waves-green btn-flat closeBtn"><i class="material-icons">close</i></a></h4>
                    <div className="row">
                        {/* Form inside of the modal to Reset the Password in the database */}
                        <form className="col s12">
                            <div className="row">
                                <p className="col l4 push-l1"> Current Password </p>
                                <div className="input-field col l2">
                                    <input name="oldPwd" type="password"
                                        onChange={props.pwdInputChange}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <p className="col l4 push-l1"> New Password </p>
                                <div className="input-field inline col l2">
                                    <input name="newPwd" type="password"
                                        onChange={props.pwdInputChange}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <p className="col l4 push-l1"> Confirm Password </p>
                                <div className="input-field inline col l2">
                                    <input name="confirmPwd" type="password"
                                        onChange={props.pwdInputChange}
                                    />
                                </div>
                            </div>
                            <div className="center">
                                 <a className="modal-action waves-effect waves-light btn-large buttonDiv" 
                                  id="pwdSubmit"
                                  onClick={props.changePwdSubmit}>Submit</a>
                                <br/>  <br/>  <span className="errorMsg">{props.pwdErrorMsg}</span>
                            </div>
                            
                           
                        </form>
                    </div>
                  </div>

            </div>
        </>
    )
}

// Buttons for Update Profile and Reset 
export function UpdateButton(props) {
    return (
        <>
            <div className="col l2 m2 offset-m1 s5">
                <a className="waves-effect waves-light btn-large buttonDiv profileBtn" {...props}>{props.name}</a>
                <br /><br />
            </div>

        </>
    );
}


