import { fromJS } from 'immutable';

// Actions
export const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED';
export const INCREMENT = 'counter/INCREMENT';
export const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED';
export const DECREMENT = 'counter/DECREMENT';

// Initial State
const initialState = fromJS({
  counter: 0,
  isIncrementing: false,
  isDecrementing: false,
});

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_REQUESTED:
      return state.set('isIncrementing', true);
    case INCREMENT:
      return state
        .update('counter', counter => counter + action.payload)
        .set('isIncrementing', false);
    case DECREMENT_REQUESTED:
      return state.set('isDecrementing', true);
    case DECREMENT:
      return state
        .update('counter', counter => counter - action.payload)
        .set('isDecrementing', false);
    default:
      return state;
  }
};

// Action Creators
export const increment = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED,
    });

    dispatch({
      type: INCREMENT,
      payload: 1,
    });
  };
};

export const incrementAsync = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED,
    });

    return setTimeout(() => {
      dispatch({
        type: INCREMENT,
        payload: 1,
      });
    }, 3000);
  };
};

export const decrement = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED,
    });

    dispatch({
      type: DECREMENT,
      payload: 1,
    });
  };
};

export const decrementAsync = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED,
    });

    return setTimeout(() => {
      dispatch({
        type: DECREMENT,
        payload: 1,
      });
    }, 3000);
  };
};

// Selectors
export const getCounter = state => state.get('counter');
export const getIncrementing = state => state.get('isIncrementing');
export const getDecrementing = state => state.get('isDecrementing');
