import React, { Component } from "react";
import LoginNavbar from "../components/LoginNavbar";
import Dropdown from "../components/Dropdown";
import Button from "../components/Button";
import { Input, EmailInput, PasswordInput  } from "../components/Form";
import API from "../utils/API";


// function LoginPage() {

class LoginPage extends Component {
  state = {
    title: "",
    email: "",
    password: "",
  };
  handleInputChange = event => {
    const { id, value,className } = event.target;
     this.setState({ [id]: value });
  };

  componentDidMount() {
    // this.loadBooks();
  }

  // handleFormSubmit = event => {
  //   event.preventDefault();

  //     if(this.state.title === 'SUM')
  //     {
  //       // API.validateSUMLogin({
  //       //   email: this.state.email,
  //       //   password: this.state.password
  //       // }) 
  //       // .then(res => this.homePage())
  //       // .catch(err => console.log(err));
  //       //  this.props.history.push("/SUM");
  //       // window.location.hash = "/SUM";
  //       // console.log(this.state.emailValidate);
  //     }
  //     else if(this.state.title === 'TCM')
  //     {
  //     //   API.validateTCPLogin({
  //     //     email: this.state.email,
  //     //     password: this.state.password
  //     //   }) 
  //     //   .then(res => this.homePage())
  //     //   .catch(err => console.log(err));
  //     // }
  //     //  this.props.history.push("TCMInventory");
  //   } 
  // };


  render() {
    return (
      <div>
      <LoginNavbar title={'Girl Scout Cookie Swap'}
        ahref={'/'}
        page={'login'}/>
      <div className='row'>
        <div className="col col l7 push-l4 s12">
          
          <Dropdown 
            value={this.state.title} 
            id="title"
            name="Title"
            // error={!this.state.title || !this.state.title == '' ? '': this.state.titleError}//this.state.titleError}
            onChange={this.handleInputChange}
          />
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
          <PasswordInput
            value={this.state.password}
            onChange={this.handleInputChange}
            id="password"
            name="Password"
            placeholder="Password (required)"
          />
          <Button onClick={() => {           
            //onclick for when you click login
            API.getTCMS().then (res => {
              //initialize variable for email
              let emailGrabbed = {
                name: "",
                id: "",
                foundEmail: false
              };
              for(let i = 0; i <res.data.length; i++){
                if (res.data[i].email === this.state.email){
                  emailGrabbed.name = res.data[i].email;
                  emailGrabbed.id = i;
                  emailGrabbed.foundEmail = true;
                }
              }
              if(emailGrabbed.foundEmail == true){
                //checks the password you inputed against the email you have entered and runs code if password does match
                if(res.data[emailGrabbed.id].password === this.state.password){
                  console.log("You have successfully logged in with email: " + emailGrabbed.name)
                  document.location.href = "/TCMinventory";
                }else{
                  console.log("password is incorrect")
                }
              }else{
                console.log("email doesnt exist")
              }
            })
          //=================================================================================================
          }}
            disabled={!(this.state.title && this.state.email && this.state.password
              && this.state.email.trim().match(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/))
            }
            
            
            />
        </div>
      </div>
      </div>
    );
  }


}

export default LoginPage;