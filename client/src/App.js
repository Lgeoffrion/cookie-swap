import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Nav from "./components/Nav"
import landing from "./pages/landing";
import loginPage from "./pages/LoginPage";
import Inventory from "./pages/Inventory";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={loginPage} />
          <Route exact path="/home" component={landing} />
          <Route exact path="/inventory" component={Inventory} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;