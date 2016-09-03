import * as Actions from '../actions'

const INITIAL_STATE = {
  connectionCount: 0
}

const reducer = function(state = INITIAL_STATE, action) {
  if (!action) return state;

  switch (action.type) {
    case Actions.SERVER_STATE_CHANGED: {
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

module.exports = reducer;
