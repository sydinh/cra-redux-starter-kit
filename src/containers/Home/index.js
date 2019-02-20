import React, { lazy, Suspense } from 'react';

import ErrorHandler from 'components/ErrorHandler';
import Loading from 'components/Loading';

const LazyLoadedContainer = lazy(() => import('./Container'));

const Home = () => (
  <ErrorHandler>
    <Suspense fallback={<Loading />}>
      <LazyLoadedContainer />
    </Suspense>
  </ErrorHandler>
);

export default Home;
