import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Nav from "./components/Nav"
import SUMlanding from "./pages/SUMlanding";
import TCMInventory from "./pages/TCMInventory";
import Profile from "./pages/Profile";
import loginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={loginPage} />
          <Route exact path="/SUM" component={SUMlanding} />
          <Route exact path="/TCM" component={TCMInventory} />
          <Route exact path="/Profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;