import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import withScroll from 'utils/withScroll';

const AboutContainer = () => (
  <Fragment>
    <Helmet>
      <title>About</title>
    </Helmet>
    <h1>About Container</h1>
  </Fragment>
);

export default withScroll(AboutContainer);
