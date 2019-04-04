import React from "react";
import "./style.css";

function LoginNav(props) {
  return (
    <nav className="nav-extended row" id="loginnavbar">
    <div className="nav-wrapper section">
        <div className="col s12" id="logintopNav">
            <div className="brand-logo left" id="loginlogo"><img width="100" height="auto" src="../../images/gstcslogo.png" alt="" />
            </div>
            <h1 className="brand-logo center hide-on-small-only" id="loginnavTitle">{props.title}</h1>
            {
              props.page !== 'login'?
              (
                <ul className="right hide-on-med-and-down">
                  <li><a href="/TCMInventory">Inventory</a></li>
                  <li><a href="/">Logout</a></li>
              </ul>
              ):""
            }
        </div> 
    </div>
</nav>
  );
}

export default LoginNav;
