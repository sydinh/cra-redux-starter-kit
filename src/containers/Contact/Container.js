import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import withScroll from 'utils/withScroll';

const ContactContainer = () => (
  <Fragment>
    <Helmet>
      <title>Contact</title>
    </Helmet>
    <h1>Contact Container</h1>
  </Fragment>
);

export default withScroll(ContactContainer);
