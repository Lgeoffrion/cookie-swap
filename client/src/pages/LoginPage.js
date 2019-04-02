import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { Input, PasswordInput } from "../components/Form";

// function LoginPage() {

class LoginPage extends Component {
        state = {
                title:"",
                email: "",
                password: ""
              };
              handleInputChange = event => {
                const { name, value } = event.target;
                this.setState({
                  [name]: value
                });
              };
       render()
       { 
        return (
                <div>
                <Navbar title={'Girl Scout Cookie Swap'}/>
               
                <Input
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  name="email"
                  placeholder="Email (required)"
                />

                <PasswordInput
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  name="password"
                  placeholder="Password (required)"
                />              
                </div>
        );
       }
}

export default LoginPage;