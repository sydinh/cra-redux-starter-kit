import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'containers/Home';
import About from 'containers/About';
import Work from 'containers/Work';
import Contact from 'containers/Contact';
import NotFound from 'containers/NotFound';

import Navigation from 'components/Navigation';

import * as ROUTES from 'constants/routes';

class AppContainer extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route path={ROUTES.ABOUT} component={About} />
          <Route path={ROUTES.WORK} component={Work} />
          <Route path={ROUTES.CONTACT} component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    );
  }
}

export default AppContainer;
