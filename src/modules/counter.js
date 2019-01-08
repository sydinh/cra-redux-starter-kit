// Actions
export const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED';
export const INCREMENT = 'counter/INCREMENT';
export const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED';
export const DECREMENT = 'counter/DECREMENT';

// Initial State
const initialState = {
  counter: 0,
  isIncrementing: false,
  isDecrementing: false,
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true,
      };

    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
        isIncrementing: !state.isIncrementing,
      };

    case DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true,
      };

    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
        isDecrementing: !state.isDecrementing,
      };

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
      });
    }, 3000);
  };
};

// Selectors
export const getCounter = state => state.counter;
export const getIncrementing = state => state.isIncrementing;
export const getDecrementing = state => state.isDecrementing;
