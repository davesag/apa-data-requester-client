import { combineReducers } from 'redux'
import server from './server'
import ui     from './ui'

const reducer = combineReducers({
  server,
  ui
});

module.exports = reducer;
