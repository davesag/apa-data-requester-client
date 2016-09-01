import * as actions from './actions';

const INITIAL_STATE = {
  connectionCount: 0,
  requesting: false,
  response: null
};

const reducer = function(state = INITIAL_STATE, action) {
  if (!action) return state;

  switch (action.type) {
    case actions.SERVER_STATE_CHANGED: {
      const serverState = action.payload;
      return {
        ...state,
        ...serverState
      };
    }
    default: {
      return state
    }
  }
}

module.exports = {
  reducer,
  INITIAL_STATE
};
