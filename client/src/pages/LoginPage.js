import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Dropdown from "../components/Dropdown";
import LoginButton from "../components/LoginButton";
import { Input, EmailInput, PasswordInput } from "../components/Form";
import API from "../utils/API";


class LoginPage extends Component {
  state = {
    title: "",
    email: "",
    password: "",
    errorMsg:""
  };

  // update the state while typing Email and Password fields  
  handleInputChange = event => {
    const { id, value, className } = event.target;
    this.setState({ [id]: value });
  };

  // As soon as we go to Login page, clear the user Info if there is any
  componentDidMount() {
    sessionStorage.removeItem('TCM_userInfo');
    sessionStorage.removeItem('SUM_userInfo');
    sessionStorage.clear();
    // this.loadBooks();
  }

  handleFormSubmit = () => {
    // event.preventDefault();
    // as soon as submit button is clicked, clear the email and password field 
    this.setState({ email : "", password : "", });
    
    // When submit button is clicked and title is selected as "SUM", clear the email and password field 
    if (this.state.title === 'SUM') {
      // Send in API call for checking the SUM Login and Password
      API.validateSUMLogin({
        email: this.state.email,
        password: this.state.password
      })
        .then(
          res => {
            // Once we get the response check if we get the response Data Success as "yes"
            console.log("res.success", res.data.success);
            if (res.data.success === "Yes") {
              sessionStorage.removeItem('SUM_userInfo');
              sessionStorage.clear();
              sessionStorage.setItem('SUM_userInfo', JSON.stringify(res.data));
              document.location.href = "/SUM";
            }
            // If the response is not success then show Error Message
            else {
              this.setState({ errorMsg: "Invalid Username or Password" });
            }
          }
        )
        .catch(err => console.log(err));
    }
    // When submit button is clicked and title is selected as "TCM", clear the email and password field 
    else if (this.state.title === 'TCM') {
       // Send in API call for checking the TCM Login and Password
      API.validateTCMLogin({
        email: this.state.email,
        password: this.state.password
      })
        .then(
          res => {
             // Once we get the response check if we get the response Data Success as "yes"
            console.log("res.data.success", res.data.success);
            if(res.data.success === "Yes")   {
              sessionStorage.removeItem('TCM_userInfo');
              sessionStorage.clear();
              sessionStorage.setItem('TCM_userInfo', JSON.stringify(res.data.user));
              document.location.href = "/TCM";
            }
             // If the response is not success then show Error Message
            else
            {
              this.setState({ errorMsg: "Invalid Username or Password" });
            }
          }
        )
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        {/* Passing the Navbar title and page Name as parameter */}
        <Navbar title={'Girl Scout Cookie Swap'}
          page={'login'} />

        <div className='row'>
          <div className="col col l7 push-l4 m10 push-m2 s12 push-s1">
          
          {/* Dropdown for selecting Login for SUM / TCM */}
            <Dropdown
              value={this.state.title}
              id="title"
              name="Title"
              className='loginpageInput'
              onChange={this.handleInputChange}
            />

            {/* Seperate EmailInput compenent with Email validations */}
            <EmailInput
              value={this.state.email}
              onChange={this.handleInputChange}
              id="email"
              name="Email"
              placeholder="Email (required)"
              className=
              {
                (!this.state.email ||
                  this.state.email.trim().match(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/)) ? "valid" : "invalid"
              }
            />

            {/* As of now no password validations*/}
            <PasswordInput
              value={this.state.password}
              onChange={this.handleInputChange}
              id="password"
              name="Password"
              className='loginpageInput'
              placeholder="Password (required)"
            />

            {/* Disable the Login button if email/password/ title is not entered and also if the email is not valid*/}
           <LoginButton
              disabled={ !(this.state.email && this.state.title && this.state.password
                && this.state.email.trim().match(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/))
              }
              // Handle the login submission
              onClick={this.handleFormSubmit}
              error={this.state.errorMsg}
            />
          </div>

        </div>
      </div>
    );
  }


}

export default LoginPage;