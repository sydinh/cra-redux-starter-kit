import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import withScrollToTopOnMount from 'utils/withScrollToTopOnMount';

const WorkContainer = () => (
  <Fragment>
    <Helmet>
      <title>Work</title>
    </Helmet>
    <h1>Work Container</h1>
  </Fragment>
);

export default withScrollToTopOnMount(WorkContainer);
