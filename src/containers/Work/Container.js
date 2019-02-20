import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import withScroll from 'utils/withScroll';

const WorkContainer = () => (
  <Fragment>
    <Helmet>
      <title>Work</title>
    </Helmet>
    <h1>Work Container</h1>
  </Fragment>
);

export default withScroll(WorkContainer);
