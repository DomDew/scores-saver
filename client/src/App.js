import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LandingPage from "./components/LandingPage";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
      </Switch>
    </Router>
  );
}
