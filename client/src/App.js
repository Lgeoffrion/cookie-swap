import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Nav from "./components/Nav"
import TCMlanding from "./pages/TCMlanding";
import SUMlanding from "./pages/SUMlanding";
import loginPage from "./pages/LoginPage";
import Inventory from "./pages/Inventory";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={loginPage} />
          <Route path="/Inventory" component={Inventory} />
          {/* <Route path="/Inventory" render={() => <Inventory/>} /> */}
          <Route exact path="/SUM" component={SUMlanding} />
          {/* <Route exact path="/TCM" component={TCMlanding} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;