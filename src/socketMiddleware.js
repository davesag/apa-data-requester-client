const socketMiddlware = socket => store => next => action => {
  if (action.remote) {
    socket.emit('action', action);
    console.log('Emitted remote action', action)
  }
  return next(action);
};

module.exports = socketMiddlware;
