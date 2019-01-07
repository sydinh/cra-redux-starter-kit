import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'containers/Home';
import About from 'containers/About';
import Work from 'containers/Work';
import Contact from 'containers/Contact';
import NotFound from 'containers/NotFound';

import Navigation from 'components/Navigation';

import * as routes from 'constants/routes';

class AppContainer extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <Switch>
          <Route exact path={routes.HOME} component={Home} />
          <Route path={routes.ABOUT} component={About} />
          <Route path={routes.WORK} component={Work} />
          <Route path={routes.CONTACT} component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    );
  }
}

export default AppContainer;
