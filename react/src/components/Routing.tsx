import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Driver from '../views/Driver';
import AllDrivers from '../views/AllDrivers';

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <AllDrivers />
        </Route>
        <Route path="/drivers/:id">
          <Driver />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routing;
