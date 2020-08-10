import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Router, Switch } from 'react-router-dom'
//import Switch from 'react';


import Login from './Login'
import Home from './Home'
import history from './history'
import Lastpage from './Lastpage';


class Routes extends Component {

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/lastpage" exact component={Lastpage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes