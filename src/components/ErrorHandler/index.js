/**
 * ErrorHandler
 *
 * https://reactjs.org/docs/error-boundaries.html
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      errorInfo: error,
    };
  }

  renderFallbackUI = () => <div>Sorry, an error occurred.</div>;

  render() {
    if (this.state.hasError) {
      return this.renderFallbackUI;
    }

    return this.props.children;
  }
}

ErrorHandler.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorHandler;
