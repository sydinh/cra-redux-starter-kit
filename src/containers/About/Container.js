import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import withScrollToTopOnMount from 'utils/withScrollToTopOnMount';

const AboutContainer = () => (
  <Fragment>
    <Helmet>
      <title>About</title>
    </Helmet>
    <h1>About Container</h1>
  </Fragment>
);

export default withScrollToTopOnMount(AboutContainer);
