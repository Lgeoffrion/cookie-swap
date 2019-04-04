import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Dropdown from "../components/Dropdown";
import LoginNavbar from '../components/LoginNavbar';
import Button from "../components/Button";
import { Input, EmailInput, PasswordInput } from "../components/Form";
import API from "../utils/API";


// function LoginPage() {
// API.getTCM().then (res => {
//   console.log(res);
// })

class LoginPage extends Component {
  state = {
    title: "",
    email: "",
    password: "",
    errorMsg:""
  };
  handleInputChange = event => {
    const { id, value, className } = event.target;
    this.setState({ [id]: value });
  };

  componentDidMount() {
    // this.loadBooks();
  }

  handleFormSubmit = () => {
    // event.preventDefault();

    if (this.state.title === 'SUM') {
      API.validateSUMLogin({
        email: this.state.email,
        password: this.state.password
      })
        .then(
          res => {
            console.log("res", res);
            if (res.data == null) {
              this.setState({ errorMsg: "Invalid Username or Password" });
            }
            else {
              sessionStorage.removeItem('userInfo');
              sessionStorage.clear();
              sessionStorage.setItem('userInfo', JSON.stringify(res.data));
              document.location.href = "/SUM";
            }
          }
        )
        .catch(err => console.log(err));
    }
    else if (this.state.title === 'TCM') {
      API.validateTCMLogin({
        email: this.state.email,
        password: this.state.password
      })
        .then(
          res => {
            console.log("res", res);
            if (res.data == null) {
              this.setState({ errorMsg: "Invalid Username or Password" });
            }
            else {
<<<<<<< HEAD
=======
              sessionStorage.removeItem('userInfo');
              sessionStorage.clear();
              sessionStorage.setItem('userInfo', JSON.stringify(res.data));
>>>>>>> 498cd5f31bf8322687d89fe4fe1dcac28e441f54
              document.location.href = "/TCM";
            }
          }
        )
        .catch(err => console.log(err));
    }
  };


  render() {
    return (
      <div>
        <LoginNavbar title={'Girl Scout Cookie Swap'}
          ahref={'/'}
          page={'login'} />
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
           <Button
              disabled={ !(this.state.email && this.state.title && this.state.password
                && this.state.email.trim().match(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/))
              }
              onClick={this.handleFormSubmit}
              errorMsg={this.state.errorMsg}
            />
          </div>

        </div>
      </div>
    );
  }


}

export default LoginPage;