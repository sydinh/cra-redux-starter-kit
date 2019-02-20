import React, { Fragment } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  getCounter,
  getIncrementing,
  getDecrementing,
} from 'modules/counter';

import withScroll from 'utils/withScroll';
import Button from 'components/Shared/Button';

const HomeContainer = props => (
  <Fragment>
    <h1>Home</h1>
    <p>Counter: {props.counter}</p>
    <div>
      <Button onClick={props.increment}>Increment</Button>
      <Button onClick={props.incrementAsync} disabled={props.isIncrementing}>
        Increment Async
      </Button>
    </div>
    <div>
      <Button onClick={props.decrement}>Decrement</Button>
      <Button onClick={props.decrementAsync} disabled={props.isDecrementing}>
        Decrement Async
      </Button>
    </div>
  </Fragment>
);

HomeContainer.propTypes = {
  counter: PropTypes.number.isRequired,
  isIncrementing: PropTypes.bool,
  isDecrementing: PropTypes.bool,
  increment: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  decrementAsync: PropTypes.func.isRequired,
};

HomeContainer.defaultProps = {
  isIncrementing: false,
  isDecrementing: false,
};

const mapStateToProps = state => ({
  counter: getCounter(state.counter),
  isIncrementing: getIncrementing(state.counter),
  isDecrementing: getDecrementing(state.counter),
});

const mapDispatchToProps = {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
};

const withRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withRedux,
  withScroll,
)(HomeContainer);
