import React from "react";
import "./style.css";
// var navDisplay = page => {

// }
function Navbar(props) {
    return (
        <div>
            <nav className="nav-extended row" id="navbar">
                <div className="nav-wrapper section">
                    <div className="col s12" id="topNav">
                        <div className="brand-logo left" id="logo"><img width="100" height="auto" src="../../images/gstcslogo.png" alt="" /></div>
                  
                        <h1 className="brand-logo center hide-on-small-only" id="navTitle">{props.title}</h1>
                        {/* Navbar links based on page */}
                        <a href="#" data-target="dropdown-nav" id="navDrop" className="dropdown-trigger hide-on-large-only right"><i className="material-icons">menu</i></a>
                        {
                            props.page === 'login'?
                            ""
                            :props.page === 'tcm'?
                            
                                <ul className="right hide-on-med-and-down">
                                    <li><a href="/TCM">Inventory</a></li>
                                    <li><a href="/Profile">Profile</a></li>
                                    <li><a href="/">Logout</a></li>
                                </ul>
                            :props.page === 'sum'?
                            
                            <ul className="right hide-on-med-and-down">
                                <li><a href="/">Logout</a></li>
                            </ul>
                            :""
                        }
                    </div> 
                </div>
                {/* Tabs beneath the navbar */}
                <div className="nav-content col s12">
                    {
                        props.page === 'login'?
                        ""
                        :props.page === 'tcm'?
                        
                            <ul className="tabs tabs-transparent" id="tabs">
                                <li className="tab col m6 s12"><a href="#excessinventory">Excess Inventory</a></li>
                                <li className="tab col m6 s12"><a href="#yourinventory">Your Excess Invertory</a></li>
                            </ul>
                        :props.page === 'sum'?
                        
                        <ul className="tabs tabs-transparent" id="tabs">
                            <li className="tab col m6 s12"><a href="#contacts">Contacts</a></li>
                            <li className="tab col m6 s12"><a href="#swapreport">View Swap Report</a></li>
                        </ul>
                        :""
                    }
                </div>
            </nav>
            {/* Dropdown content */}
            {
                props.page === 'login'?
                ""
                :props.page === 'tcm'?
                (
                    <ul className='dropdown-content' id='dropdown-nav'>
                        <li><a href="/TCM">Inventory</a></li>
                        <li><a href="/Profile">Profile</a></li>
                        <li><a href="/">Logout</a></li>
                    </ul>
                ):props.page === 'sum'?
                (
                    <ul className='dropdown-content' id='dropdown-nav'>
                        <li><a href="/TCM">Inventory</a></li>
                        <li><a href="/Profile">Profile</a></li>
                        <li><a href="/">Logout</a></li>
                    </ul>
                ):""
            }   
        </div>

    );
}

export default Navbar;