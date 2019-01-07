import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import withScrollToTopOnMount from 'utils/withScrollToTopOnMount';

const ContactContainer = () => (
  <Fragment>
    <Helmet>
      <title>Contact</title>
    </Helmet>
    <h1>Contact Container</h1>
  </Fragment>
);

export default withScrollToTopOnMount(ContactContainer);
