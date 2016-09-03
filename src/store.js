import {createStore, applyMiddleware} from 'redux'
import io from 'socket.io-client';
import {socketUrl} from './config';

import socketMiddleware     from './socketMiddleware';
import reducer              from './reducers';
import {serverStateChanged} from './actions';

console.log(`Connecting to ${socketUrl}`);
const socket = io(socketUrl);

const createStoreWithMiddleware = applyMiddleware(
  socketMiddleware(socket)
)(createStore);

const store = createStoreWithMiddleware(reducer);

socket.on('state', serverState => {
  console.log('serverState change received', serverState);
  store.dispatch(serverStateChanged(serverState));
});

socket.on('action', action => {
  console.log('server action received', action);
  store.dispatch.bind(store)(action);
});

module.exports = store;
