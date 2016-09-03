import * as Actions from '../actions'

const INITIAL_STATE = {
  selectedTab: 0,
};

const reducer = function(state = INITIAL_STATE, action) {
  if (!action) return state;

  switch (action.type) {
    case Actions.CHANGED_TAB: {
      const {index, prevIndex} = action.payload;
      console.log('Tab changed to:', index, "from", prevIndex);
      return {
        ...state,
        selectedTab: action.payload.index
      }
    }
    default: {
      return state
    }
  }
}

module.exports = reducer;
