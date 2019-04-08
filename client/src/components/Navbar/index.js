import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <>
      <nav className="nav-extended" id="navbar">
        <div className="nav-wrapper" id="navWrapper">
          {/* navbar logo image */}
          <div className="brand-logo left" id="logo"><img width="100" height="auto" src="../../images/gstcslogo.png" alt="" />
          </div>
          {/* title of the navbar, passed as a prop for the title by page */}
          <h1
          className="brand-logo center" id="navTitle">{props.title}</h1>
          {/* ============ Nav links and dropdown anchor for med and smaller pages ======= */}
          {
            props.page === 'login' ?
              ""
            // tcm page nav links
            : props.page === 'tcm' ?
              <>
                <a href="#" data-target="dropdown-nav" id="navDrop" className="dropdown-trigger hide-on-large-only right"><i className="material-icons">menu</i></a>
                <ul className="right hide-on-med-and-down">
                <li><a href="/TCM">Trade Cookies</a></li>
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
                <li><a href="/TCM">Trade Cookies</a></li>
                  <li><a href="/TCM2">Inventory</a></li>
                  <li><a href="/Profile">Profile</a></li>
                  <li><a href="/">Logout</a></li>
                </ul>
            </>
          : ""
          }
        </div>
        {/*============== Tabs beneath the navbar ================================*/}
        <div className="nav-content" id="tabBar">
          {
            props.page === 'login' ?
              ""
            //tcm page tabs they are referenced by id
            : props.page === 'tcm' ?
              <ul className="tabs tabs-transparent tabs-fixed-width z-depth-1" id="tabs">
                <li className="tab"><a href="#cookieTrade">Trading Cookie</a></li>
                <li className="tab"><a href="#yourinventory">Your Invertory</a></li>
              </ul>
            //sum page tabs they are referenced by id
            : props.page === 'sum' ?
              <ul className="tabs tabs-transparent tabs-fixed-width z-depth-1" id="tabs">
                <li className="tab"><a href="#contacts">Contacts</a></li>
                <li className="tab"><a href="#swapreport">View Swap Report</a></li>
              </ul>
            : ""
          }
        </div>
      </nav>
      {/*============== Dropdown content ========================================*/}
      {
        // login is nothing
        props.page === 'login' ?
          ""
          //tcm page dropdown content
          : props.page === 'tcm' ?
            
            <ul className='dropdown-content' id='dropdown-nav'>
              <li><a href="/TCM">Trade Cookies</a></li>
              <li><a href="/TCM2">Inventory</a></li>
              <li><a href="/Profile">Profile</a></li>
              <li><a href="/">Logout</a></li>
            </ul>
          //sum page dropdown
          : props.page === 'sum' ?
            <ul className='dropdown-content' id='dropdown-nav'>
              <li><a href="/TCM">Inventory</a></li>
              <li><a href="/Profile">Profile</a></li>
              <li><a href="/">Logout</a></li>
            </ul>
          //profile page dropdown
          : props.page === 'profile' ?
            <ul className='dropdown-content' id='dropdown-nav'>
              <li><a href="/TCM">Trade Cookies</a></li>
              <li><a href="/TCM2">Inventory</a></li>
              <li><a href="/Profile">Profile</a></li>
              <li><a href="/">Logout</a></li>
            </ul>
          : ""
      }
    </>
  );
}

export default Navbar;
