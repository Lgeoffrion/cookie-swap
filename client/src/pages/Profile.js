import React, { Component } from "react";
import Navbar from "../components/Navbar";
import API from "../utils/API";
import ProfileTable from "../components/ProfileTable";
import { UpdateButton, ChangePwd } from "../components/ProfileButton";
// import Button from "../components/Button";

class Profile extends Component {
    // Take from database and pass to state as troopInv
    state = {
        profileDetails: [],
        userid: "",
        name: "",
        troop: "",
        phone: "",
        city: "",
        email: "",
        oldPwd: "",
        newPwd: "",
        confirmPwd: "",
        pwdError: "",
        phoneErrorMsg: "valid profilePageInput",
        profileChanged: false,
        updateMsg: ""
    };
    componentDidMount = () => {
        this.getprofileDetails();
    }

    // Method to get Profile details using API routes
    getprofileDetails = () => {
        // Check if the TCM user already logged in, if they are not looged in then send them to Login Page
        var TCM_userInfo = JSON.parse(sessionStorage.getItem('TCM_userInfo'));

        if (!TCM_userInfo) {
            document.location.href = "/";
        }
        else {
            // Once we get the userInfo from Session Storage, store only the user id in state variable
            console.log("TCM_userInfo", TCM_userInfo.id);
            this.setState({ userid: TCM_userInfo.id });

            API.getYourInventory(TCM_userInfo.id)
                .then(res => {
                    this.setState({
                        // originalProfileDetails :res.data,
                        profileDetails: res.data,
                        userid: TCM_userInfo.id,
                        name: res.data.name,
                        troop: res.data.troop,
                        phone: res.data.phone,
                        email: res.data.email,
                        city: res.data.city
                    });
                });
        }
    }

    // update the state while typing Email and Password fields  
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
        this.setState({ profileChanged: true });
    };

    handlePwdInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
        // this.setState({ profileChanged: true });
    };

    handleChangePwdSubmit = () => {
        if (!this.state.oldPwd || !this.state.confirmPwd || !this.state.newPwd)
            this.setState({ pwdError: "Please fill all the Fields before submitting " });

        else if (this.state.oldPwd !== this.state.profileDetails.password)
            this.setState({ pwdError: "Current Password is wrong" });

        else if (this.state.newPwd != this.state.confirmPwd)
            this.setState({ pwdError: "Confirmation Password does not match " });

        else if (this.state.newPwd == this.state.confirmPwd == this.state.oldPwd)
            this.setState({ pwdError: "New Password can not be same as the old Password" });

        else this.setState({ pwdError: "" });

        API.tcmProfilePwdUpdate(this.state.userid, 
                {oldPwd : this.state.oldPwd, newPwd: this.state.newPwd})
            .then(res => {
                console.log("res", res);
            });

        this.setState({ profileChanged: false });
        this.setState({ updateMsg: "Your Profile has been updated" })
        setTimeout(() => {
            this.setState({ updateMsg: "" })
        }, 3000);
    }



    handleInputPhoneChange = event => {
        const { name, value } = event.target;
        if (name == "phone" &&
            (event.key.match(/[0-9]/) || event.keyCode == 8 || event.keyCode == 189)
            && (event.keyCode == 8 || value.length < 12)) {
            var newphone = value + event.key;
            this.setState({ phone: newphone });
            if (newphone.match(/([0-9]{3})\-([0-9]{3})-([0-9]{4})$/)) this.setState({ phoneErrorMsg: "valid profilePageInput" });
            else this.setState({ phoneErrorMsg: "invalid profilePageInput" });
            this.setState({ profileChanged: true });
        }
        else {
            event.preventDefault();
        }
    };

    handleFormSubmit = () => {

        API.tcmProfileUpdate(this.state.userid, this.state)
            .then(res => {
                console.log("res", res);
            });

        this.setState({ profileChanged: false });
        this.setState({ updateMsg: "Your Profile has been updated" })
        setTimeout(() => {
            this.setState({ updateMsg: "" })
        }, 3000);
        // document.location.href = "/Profile";
    }
    handleReset = event => {
        document.location.href = "/Profile";
    }


    render() {
        return (
            <>
                {/* Navbar passes a prop which will be the navbar title */}
                <Navbar title="Troop Manager Profile"
                    page={'profile'} />

                <div className="row">
                    <div className="col l10 push-l2 s12">
                        {/* Wrapper for the excess inventory, passes a prop which ids the wrapper 
                   tabs from the Navbar then swap which wrapper is seen based off this id*/}
                        {/* <MainWrapper id="yourinventory">
               </MainWrapper> */}
                        <ProfileTable
                            profileInfo={this.state.profileDetails}
                            currentUser={this.state.userid}
                            inputChange={this.handleInputChange}
                            inputPhoneChange={this.handleInputPhoneChange}
                            emailErrorMsg={(!this.state.email ||
                                this.state.email.trim().match(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,3})$/)) ? "valid profilePageInput" : "profilePageInput invalid"
                            }
                            phoneErrorMsg={this.state.phoneErrorMsg}
                            formSubmit={this.handleFormSubmit}
                        />
                        <div className="row">
                            <h6 className="updateMsg col l8 push-l4 green-text s2 push-s2">
                                {this.state.updateMsg}
                            </h6>
                        </div>
                        <div className="row">
                            <ChangePwd
                                // Handle the login submission
                                pwdInputChange={this.handlePwdInputChange}
                                changePwdSubmit={this.handleChangePwdSubmit}
                                pwdErrorMsg={this.state.pwdError}
                            />
                            <UpdateButton
                                disabled={!(this.state.name && this.state.troop && this.state.email && this.state.phone && this.state.city
                                    && this.state.email.trim().match(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,3})$/)
                                    && this.state.phoneErrorMsg == "valid profilePageInput"
                                    && this.state.profileChanged
                                )
                                }
                                // Handle the login submission
                                onClick={this.handleFormSubmit}
                                name={'Update'}
                            />
                            <UpdateButton
                                // Handle the login submission
                                onClick={this.handleReset}
                                name={'Refresh'}
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Profile;