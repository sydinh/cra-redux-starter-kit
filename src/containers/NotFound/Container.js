import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import withScroll from 'utils/withScroll';

const NotFoundContainer = () => (
  <Fragment>
    <Helmet>
      <title>NotFound</title>
    </Helmet>
    <h1>NotFound Container</h1>
  </Fragment>
);

export default withScroll(NotFoundContainer);
