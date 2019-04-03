import React, { Component } from "react";

import Navbar from "../components/Navbar";
import { Link} from "react-router-dom";
import { withRouter } from "react-router-dom";
import LoginNavbar from "../components/LoginNavbar";
import Dropdown from "../components/Dropdown";
import Button from "../components/Button";
import { Input, EmailInput, PasswordInput  } from "../components/Form";
import API from "../utils/API";


// function LoginPage() {
API.getTCM().then (res => {
  console.log(res);
})


class LoginPage extends Component {
  state = {
    title: "",
    email: "",
    password: "",
    pagehref: ""
  };
  handleInputChange = event => {
    const { id, value } = event.target;
    this.setState({
      [id]: value
    });
  };


  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.email && this.state.password) {
      if(this.state.title === 'SUM')
      {
        // API.validateSUMLogin({
        //   email: this.state.email,
        //   password: this.state.password
        // }) 
        // .then(res => this.homePage())
        // .catch(err => console.log(err));
         this.props.history.push("/SUM");
        // window.location.hash = "/SUM";
      }
      else if(this.state.title === 'TCM')
      {
      //   API.validateTCPLogin({
      //     email: this.state.email,
      //     password: this.state.password
      //   }) 
      //   .then(res => this.homePage())
      //   .catch(err => console.log(err));
      // }
       this.props.history.push("/TCM");
    }
    } 
  };


  render() {
    return (
      <div>
      <LoginNavbar title={'Girl Scout Cookie Swap'} />
      <div className='row'>
        <div className="col col l7 push-l4 s12">
          
          <Dropdown 
            value={this.state.title} 
            id="title"
            name="Title"
            onChange={this.handleInputChange}
          />
          <EmailInput
            value={this.state.email}
            onChange={this.handleInputChange}
            id="email"
            name="Email"  
            placeholder="Email (required)"
          />
          <PasswordInput
            value={this.state.password}
            onChange={this.handleInputChange}
            id="password"
            name="Password"
            placeholder="Password (required)"
          />
          <Button 
           disabled={!(this.state.title && this.state.email && this.state.password)}
           onClick={this.handleFormSubmit}
            />
        </div>
      </div>
      </div>
    );
  }


}

export default LoginPage;