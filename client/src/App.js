// DEPENDENCIES
import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// UTILS
import PrivateRoute from "./utils/PrivateRoute";

// COMPONENTS
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

// STYLES
import "./styles/_main-container.scss";
import "./styles/_fonts.scss";
import "./styles/_main-button.scss";
import "./styles/_subheader.scss";
import "./styles/_home-logo.scss";
import "./styles/_form-page.scss";
import "./styles/_navbar.scss";
import "./styles/_small-button.scss";
import "./styles/_app-container.scss";

export default function AppRouter() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </AnimatePresence>
  );
}
