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
                  <ul id="dropdown1" className="dropdown-content">
                  <li><a href="/Swaps">Your Open Swaps</a></li>
                  <li><a href="/OutgoingSwaps">Your Outgoing Swaps</a></li>
                  <li><a href="/IncomingSwaps">Your Incoming Swaps</a></li>
                  </ul>
                <a href="#" data-target="dropdown-nav" id="navDrop" className="dropdown-trigger hide-on-large-only right"><i className="material-icons">menu</i></a>
                <ul id="navLinks" className="right hide-on-med-and-down">
                  <li><a href="/TCM">Swap Cookies</a></li>
                  <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Your Swaps<i className="material-icons right">arrow_drop_down</i></a></li>
                  <li><a href="/TCM2">Inventory</a></li>
                  <li><a href="/Profile">Profile</a></li>
                  <li><a href="/">Logout</a></li>
                </ul>
              </>
            // sum page nav links
            : props.page === 'sum' ?
              <>
                <a href="#" data-target="dropdown-nav" id="navDrop" className="dropdown-trigger hide-on-large-only right"><i className="material-icons">menu</i></a>
                <ul id="navLinks" className="right hide-on-med-and-down">
                  <li><a href="/">Logout</a></li>
                </ul>
              </>
            : props.page === 'profile' ?
            <>
                    <ul id="dropdown1" class="dropdown-content">
                  <li><a href="/Swaps">Your Open Swaps</a></li>
                  <li><a href="/OutgoingSwaps">Your Outgoing Swaps</a></li>
                  <li><a href="/IncomingSwaps">Your Incoming Swaps</a></li>
                  </ul>
            <a href="#" data-target="dropdown-nav" id="navDrop" className="dropdown-trigger hide-on-large-only right"><i className="material-icons">menu</i></a>
                <ul id="navLinks" className="right hide-on-med-and-down">
                  <li><a href="/TCM">Swap Cookies</a></li>
                  <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Your Swaps<i class="material-icons right">arrow_drop_down</i></a></li>
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
                    <li><a href="/Swaps">Your Open Swaps</a></li>
                  <li><a href="/Outgoing Swaps">Your Outgoing Swaps</a></li>
                  <li><a href="/Incoming Swaps">Your Incoming Swaps</a></li>
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
