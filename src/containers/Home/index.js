import React, { lazy, Suspense } from 'react';

import ErrorBoundary from 'utils/ErrorBoundary';
import Loading from 'components/Loading';

const LazyLoadedContainer = lazy(() => import('./Container'));

const Home = () => (
  <ErrorBoundary>
    <Suspense fallback={<Loading />}>
      <LazyLoadedContainer />
    </Suspense>
  </ErrorBoundary>
);

export default Home;