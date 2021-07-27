// DEPENDENCIES
import React, { useState, useMemo } from 'react';
import {
  Switch,
  Route,
  useLocation
} from 'react-router-dom';
// import { UserContext } from './utils/UserContext';
import { AnimatePresence } from 'framer-motion'

// COMPONENTS
import Home from './components/Home';
import Login from './components/Login';

// STYLES
import './styles/_main-container.scss'
import './styles/_fonts.scss'
import './styles/_main-button.scss'
import './styles/_subheader.scss'
import './styles/_home-logo.scss'
import './styles/_form-page.scss'

export default function AppRouter() {
  // const [user, setUser] = useState(null)

  // const userValue = useMemo(() => ({user, setUser}), [user, setUser]);
  const location = useLocation();

  return (
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}> 
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </AnimatePresence>
  );
}
