import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <div>
            <nav className="nav-extended row" id="navbar">
                <div className="nav-wrapper section">
                    <div className="col s12" id="topNav">
                        <div className="brand-logo left" id="logo"><img width="100" height="auto" src="../../images/gstcslogo.png" alt="" />
                        </div>
                        <h1 className="brand-logo center hide-on-small-only" id="navTitle">{props.title}</h1>
                        <a href="#" data-target="dropdown1" id="navDrop" className="dropdown-trigger hide-on-large-only right"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="sass.html">Sass</a></li>
                            <li><a href="badges.html">Components</a></li>
                            <li><a href="collapsible.html">JavaScript</a></li>
                        </ul>
                    </div> 
                </div>
                <div className="nav-content col s12">
                    <ul className="tabs tabs-transparent" id="tabs">
                        <li className="tab col m4 s12"><a href="#test1">Test 1</a></li>
                        <li className="tab col m4 s12"><a href="#test2">Test 2</a></li>
                        <li className="tab col m4 s12"><a href="#test3">Test 3</a></li>
                    </ul>
                </div>
            </nav>
            <ul className='dropdown-content' id='dropdown1' >
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
        </div>

    );
}

export default Navbar;