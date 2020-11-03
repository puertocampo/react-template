import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from 'react-router-dom';
import { Login } from './containers/Login';
import { TestUserComponent } from './containers/TestUserComponent';

const Routes = withRouter(() => (
  <Switch>
    <Route exact path='/' component={Login} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/users/:userId' component={TestUserComponent} />
  </Switch>
));

export const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};
