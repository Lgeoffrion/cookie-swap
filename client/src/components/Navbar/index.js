import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <>
      <nav id="navbar">
        <div className="nav-wrapper" id="navWrapper">
          <div className="brand-logo left" id="logo"><img className="GSImage" src="../../images/gstcslogo.png" alt="" />
          </div>
          <div className="brand-logo center hide-on-small-only" id="navTitle">{props.title}</div>
          {
            props.page === 'login' ?
              ""
            // tcm page nav links
            : props.page === 'tcm' ?
              <>
                <a href="#" data-target="dropdown-nav" id="navDrop" className="dropdown-trigger hide-on-large-only right"><i className="material-icons">menu</i></a>
                <ul className="right hide-on-med-and-down">
                <li><a href="/TCM">Swap Cookies</a></li>
                <li><a href="/Trades">Your Swaps</a></li>
                  <li><a href="/TCM2">Inventory</a></li>
                  <li><a href="/Profile">Profile</a></li>
                  <li><a href="/">Logout</a></li>
                </ul>
              </>
            // sum page nav links
            : props.page === 'sum' ?
              <>
                <a href="#" data-target="dropdown-nav" id="navDrop" className="dropdown-trigger hide-on-large-only right"><i className="material-icons">menu</i></a>
                <ul className="right hide-on-med-and-down">
                  <li><a href="/">Logout</a></li>
                </ul>
              </>
            : props.page === 'profile' ?
            <>
            <a href="#" data-target="dropdown-nav" id="navDrop" className="dropdown-trigger hide-on-large-only right"><i className="material-icons">menu</i></a>
                <ul className="right hide-on-med-and-down">
                <li><a href="/TCM">Swap Cookies</a></li>
                  <li><a href="/TCM2">Inventory</a></li>
                  <li><a href="/Profile">Profile</a></li>
                  <li><a href="/">Logout</a></li>
                </ul>
            </>
          : ""
          }
        </div>

      </nav>

      {/* Dropdown content */}
      {
        // login is nothing
        props.page === 'login' ?
          ""
          //tcm page dropdown content
          : props.page === 'tcm' ?
            (
              <ul className='dropdown-content' id='dropdown-nav'>
                    <li><a href="/TCM">Swap Cookies</a></li>
                    <li><a href="/Trades">Your Swaps</a></li>
                  <li><a href="/TCM2">Inventory</a></li>
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
              )
              : props.page === 'profile' ?
              (
                <ul className='dropdown-content' id='dropdown-nav'>
                    <li><a href="/TCM">Trade Cookies</a></li>
                    <li><a href="/TCM2">Inventory</a></li>
                  <li><a href="/Profile">Profile</a></li>
                  <li><a href="/">Logout</a></li>
                </ul>
              ) :  ""
      }
    </>
  );
}

export default Navbar;
