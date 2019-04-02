import React from "react";
import "./style.css";
import { PromiseProvider } from "mongoose";
// import "./main.js";

function Navbar(props) {
    return (
        <div>
            <nav class="nav-extended row" id="navbar">
                <div class="nav-wrapper section">
                    <div class="col s12" id="topNav">
                        <div class="brand-logo left" id="logo"><img width="100" height="auto" src="../../images/gstcslogo.png" alt="" />
                        </div>
                        <h1 class="brand-logo center hide-on-small-only" id="navTitle">{props.title}</h1>
                        <a href="#" data-target="dropdown1" id="navDrop" class="dropdown-trigger hide-on-large-only right"><i class="material-icons">menu</i></a>
                        <ul class="right hide-on-med-and-down">
                            <li><a href="sass.html">Sass</a></li>
                            <li><a href="badges.html">Components</a></li>
                            <li><a href="collapsible.html">JavaScript</a></li>
                        </ul>
                    </div> 
                </div>
                <div class="nav-content col s12">
                    <ul class="tabs tabs-transparent" id="tabs">
                        <li class="tab col m4 s12"><a href="#test1">Test 1</a></li>
                        <li class="tab col m4 s12"><a href="#test2">Test 2</a></li>
                        <li class="tab col m4 s12"><a href="#test3">Test 3</a></li>
                    </ul>
                </div>
            </nav>
            <ul class='dropdown-content' id='dropdown1' >
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
        </div>

    );
}

export default Navbar;