import React, { Fragment } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { increment, incrementAsync, decrement, decrementAsync } from 'modules/counter';

import withScrollToTopOnMount from 'utils/withScrollToTopOnMount';

const HomeContainer = props => (
  <Fragment>
    <h1>Home</h1>
    <p>Count: {props.count}</p>

    <div>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.incrementAsync} disabled={props.isIncrementing}>
        Increment Async
      </button>
    </div>

    <div>
      <button onClick={props.decrement}>Decrement</button>
      <button onClick={props.decrementAsync} disabled={props.isDecrementing}>
        Decrement Async
      </button>
    </div>
  </Fragment>
);

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing,
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
  withScrollToTopOnMount,
)(HomeContainer);
