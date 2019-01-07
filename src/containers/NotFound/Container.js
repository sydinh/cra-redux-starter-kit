import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import withScrollToTopOnMount from 'utils/withScrollToTopOnMount';

const NotFoundContainer = () => (
  <Fragment>
    <Helmet>
      <title>NotFound</title>
    </Helmet>
    <h1>NotFound Container</h1>
  </Fragment>
);

export default withScrollToTopOnMount(NotFoundContainer);
