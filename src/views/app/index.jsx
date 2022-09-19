import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Home } from '../home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path={['/', 'home']}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export { App };
