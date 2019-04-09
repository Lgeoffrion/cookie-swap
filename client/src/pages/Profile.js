import React, { Component } from "react";
import Navbar from "../components/Navbar";
import API from "../utils/API";
import ProfileTable from "../components/ProfileTable";
import { UpdateButton, ChangePwd } from "../components/ProfileButton";

class Profile extends Component {
    // state with all the details
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

    // Once the page is loaded for first time, get all the profile details of the TCM 
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

    // update the state while typing the input fields 
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
        this.setState({ profileChanged: true });
    };

    // update the Password change Modal
    handlePwdInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    // Submit Validation for Reset Password Modal 
    handleChangePwdSubmit = () => {
        if (!this.state.oldPwd || !this.state.confirmPwd || !this.state.newPwd)
            this.setState({ pwdError: "Please fill all the Fields before submitting " });

        else if (this.state.oldPwd !== this.state.profileDetails.password)
            this.setState({ pwdError: "Current Password is wrong" });

        else if (this.state.newPwd != this.state.confirmPwd)
            this.setState({ pwdError: "Confirmation Password does not match " });

        else if (this.state.newPwd == this.state.oldPwd)
            this.setState({ pwdError: "New Password can not be same as the old Password" });
        
         // If the password has passed all the validations then do API call for updating password 
        else {
            this.setState({ pwdError: "" });

            API.tcmProfilePwdUpdate(this.state.userid,
                { oldPwd: this.state.oldPwd, newPwd: this.state.newPwd })
                .then(res => {
                    console.log("res", res);
                    // Most of the time, the response will be 200 so update Success Message in page
                    if (res.status === 200) {
                        this.setState({ pwdError: "Your Password is updated" });
                    }
                    else {
                        this.setState({ pwdError: "Something went Wrong, Please refresh the page and try again" });
                    }
                }); 

            // Once the Profile is updated set default values
            this.setState({ profileChanged: false });
        }
    }

    // Validation for Phone number, and allow them not to enter anything else. 
    handleInputPhoneChange = event => {
        const { name, value } = event.target;

        if (name == "phone" &&

        // Allow to type only Number or backspace (8) or dash (-)
            (event.key.match(/[0-9]/) || event.keyCode == 8 || event.keyCode == 189)
            && (event.keyCode == 8 || value.length < 12)) {

            var newphone = value + event.key;
            this.setState({ phone: newphone });

            // Display Error Message if the Phone number is not in the 123-456-7890 format 
            if (newphone.match(/([0-9]{3})\-([0-9]{3})-([0-9]{4})$/)) this.setState({ phoneErrorMsg: "valid profilePageInput" });
            else this.setState({ phoneErrorMsg: "invalid profilePageInput" });

            // Set the profile changed to true for updating the Profile
            this.setState({ profileChanged: true });
        }
        else {
            event.preventDefault();
        }
    };

    // Once all the validation are checked, update button will be enabled 
    // Once submitted, do an API call for updating the Details for TCM
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

    // Refresh the page so if user has changed something, it will be cleared
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
                    
                    {/* Get all the Profile details from APi call and pass the info to the profile table  */}
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
                        {/* Column to push the Success Message for the Updated Profile */}
                        <div className="row">
                            <h6 className="updateMsg col l8 push-l4 green-text s2 push-s2">
                                {this.state.updateMsg}
                            </h6>
                        </div>
                        <div className="row">
                         {/* Change Password Button Component for opening the Modal */}
                            <ChangePwd
                                // Handle the login submission
                                pwdInputChange={this.handlePwdInputChange}
                                changePwdSubmit={this.handleChangePwdSubmit}
                                pwdErrorMsg={this.state.pwdError}
                            />

                            {/* Update Button for Submit Validations for Prfile Page */}
                            <UpdateButton
                                disabled={!(this.state.name && this.state.troop && this.state.email && this.state.phone && this.state.city
                                    && this.state.email.trim().match(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,3})$/)
                                    && this.state.phoneErrorMsg == "valid profilePageInput"
                                    && this.state.profileChanged
                                )
                                }
                                onClick={this.handleFormSubmit}
                                name={'Update'}
                            />
                            {/* Rest Button to clear the page */}
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