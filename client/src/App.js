import React, { useState, useMemo } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import { UserContext } from "./utils/UserContext";

export default function AppRouter() {
  const [user, setUser] = useState(null)

  const userValue = useMemo(() => ({user, setUser}), [user, setUser]);

  return (
    <Router>
      <Switch>
        <UserContext.Provider value={userValue}>
          <Route path="/" exact component={LandingPage} />
        </UserContext.Provider>
      </Switch>
    </Router>
  );
}
