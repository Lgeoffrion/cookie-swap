import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Nav from "./components/Nav"
import TCMlanding from "./pages/TCMlanding";
import SUMlanding from "./pages/SUMlanding";
import loginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={loginPage} />
          <Route exact path="/SUM" component={SUMlanding} />
          <Route exact path="/TCM" component={TCMlanding} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;