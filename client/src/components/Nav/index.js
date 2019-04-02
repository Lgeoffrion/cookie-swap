import React from "react";

function Nav(props) {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#"><img src='' alt='Logo'/></a>
        <a class="brand-logo center">{props.title}</a>
        {console.log("props.title",props.title)}
        {/* <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">JavaScript</a></li>
        </ul> */}
      </div>
  </nav>
  );
}

export default Nav;
