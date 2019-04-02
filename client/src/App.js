import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Nav from "./components/Nav"
import landing from "./pages/landing";
import loginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={loginPage} />
          <Route exact path="/home" component={landing} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;