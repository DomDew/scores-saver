// DEPENDENCIES
import React, { useState, useMemo } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { UserContext } from "./utils/UserContext";
import ReactCSSTransitionGroup from 'react-transition-group';

// COMPONENTS
import Home from "./components/Home";
import Login from "./components/Login";

// STYLES
import './styles/_main-container.scss'
import './styles/_fonts.scss'
import './styles/_main-button.scss'
import './styles/_subheader.scss'

export default function AppRouter() {
  const [user, setUser] = useState(null)

  const userValue = useMemo(() => ({user, setUser}), [user, setUser]);

  return (
    <Router>
      <Switch>
        <UserContext.Provider value={userValue}>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
        </UserContext.Provider>
      </Switch>
    </Router>
  );
}
