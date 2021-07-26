// DEPENDENCIES
import React, { useState, useMemo } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { UserContext } from "./utils/UserContext";

// COMPONENTS
import Home from "./components/Home";
import Login from "./components/Login";

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
