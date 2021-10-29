import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import Registration from "./View/Registration";
import Login from "./View/Login";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/registration" component={Registration} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
