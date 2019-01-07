/**
 * ScrollToTopOnMount
 *
 * https://reacttraining.com/react-router/web/guides/scroll-restoration
 */

import React from 'react';

const withScrollToTopOnMount = WrappedComponent => {
  class ScrollToTopOnMount extends React.Component {
    componentDidMount() {
      window.scrollTo(0, 0);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return ScrollToTopOnMount;
};

export default withScrollToTopOnMount;
