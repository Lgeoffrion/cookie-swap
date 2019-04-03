import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Nav from "./components/Nav"
import SUMlanding from "./pages/SUMlanding";
import loginPage from "./pages/LoginPage";
import TCMInventory from "./pages/TCMInventory";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={loginPage} />
          <Route exact path="/SUM" component={SUMlanding} />
          <Route exact path="/TCM" component={TCMInventory} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;