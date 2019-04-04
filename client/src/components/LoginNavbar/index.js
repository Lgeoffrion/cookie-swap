import React from "react";
import "./style.css";

function LoginNav(props) {
  return (
<<<<<<< HEAD
    <>
      <nav className="nav-extended" id="navbar">
        <div className="nav-wrapper" id="navWrapper">
          <div className="brand-logo left" id="logo"><img width="100" height="auto" src="../../images/gstcslogo.png" alt="" />
          </div>
          <h1 className="brand-logo center hide-on-small-only" id="navTitle">{props.title}</h1>
          {
            props.page === 'login' ?
              ""
              : props.page === 'tcm' ?
                <>
                <a href="#" data-target="dropdown-nav" id="navDrop" className="dropdown-trigger hide-on-large-only right"><i className="material-icons">menu</i></a>
=======
    <nav className="nav-extended row" id="loginnavbar">
    <div className="nav-wrapper section">
        <div className="col s12" id="logintopNav">
            <div className="brand-logo left" id="loginlogo">
              <img width="100" height="auto" src="../../images/gstcslogo.png" alt="" />
            </div>
            <h1 className="brand-logo center hide-on-small-only" id="loginnavTitle">{props.title}</h1>
            {
              props.page !== 'login'?
              (
>>>>>>> 498cd5f31bf8322687d89fe4fe1dcac28e441f54
                <ul className="right hide-on-med-and-down">
                  <li><a href="/TCM">Inventory</a></li>
                  <li><a href="/Profile">Profile</a></li>
                  <li><a href="/">Logout</a></li>
                </ul>
                </>
                : props.page === 'sum' ?
                <>
                <a href="#" data-target="dropdown-nav" id="navDrop" className="dropdown-trigger hide-on-large-only right"><i className="material-icons">menu</i></a>
                  <ul className="right hide-on-med-and-down">
                    <li><a href="/">Logout</a></li>
                  </ul>
                  </>
                  : ""
          }
        </div>
        {/* Tabs beneath the navbar */}
        <div className="nav-content" id="tabBar">
          {
            props.page === 'login' ?
              ""
              : props.page === 'tcm' ?

                <ul className="tabs tabs-transparent tabs-fixed-width z-depth-1" id="tabs">
                  <li className="tab"><a href="#excessinventory">Excess Inventory</a></li>
                  <li className="tab"><a href="#yourinventory">Your Excess Invertory</a></li>
                </ul>
                : props.page === 'sum' ?

                  <ul className="tabs tabs-transparent tabs-fixed-width z-depth-1" id="tabs">
                    <li className="tab"><a href="#contacts">Contacts</a></li>
                    <li className="tab"><a href="#swapreport">View Swap Report</a></li>
                  </ul>
                  : ""
          }
        </div>
      </nav>
      {/* Dropdown content */}
      {
        props.page === 'login' ?
          ""
          : props.page === 'tcm' ?
            (
              <ul className='dropdown-content' id='dropdown-nav'>
                <li><a href="/TCM">Inventory</a></li>
                <li><a href="/Profile">Profile</a></li>
                <li><a href="/">Logout</a></li>
              </ul>
            ) : props.page === 'sum' ?
              (
                <ul className='dropdown-content' id='dropdown-nav'>
                  <li><a href="/TCM">Inventory</a></li>
                  <li><a href="/Profile">Profile</a></li>
                  <li><a href="/">Logout</a></li>
                </ul>
              ) : ""
      }
    </>
  );
}

export default LoginNav;
