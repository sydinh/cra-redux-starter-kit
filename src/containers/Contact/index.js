import React, { lazy, Suspense } from 'react';

import ErrorBoundary from 'utils/ErrorBoundary';
import Loading from 'components/Loading';

const LazyLoadedContainer = lazy(() => import('./Container'));

const Contact = () => (
  <ErrorBoundary>
    <Suspense fallback={<Loading />}>
      <LazyLoadedContainer />
    </Suspense>
  </ErrorBoundary>
);

export default Contact;
