const makeAction = (type, payload, remote = false) => {
  return {
    type,
    remote,
    payload
  }
};

const makeRemoteAction = (type, payload) => makeAction(type, payload, true);

module.exports = {
  makeAction,
  makeRemoteAction
};
