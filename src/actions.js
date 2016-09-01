import {makeAction, makeRemoteAction} from './actionMaker';

const ActionList = [
  'RESPONDED',            // comes from server: payload the response
  'REQUEST',              // remote action sent to server with request data as payload.
  'SERVER_STATE_CHANGED'  // comes from server: payload the filtered server state.
];

const Actions = ActionList.reduce((acc, elem) => { acc[elem] = elem; return acc; }, {});

const ActionFunctions = {
  serverStateChanged: (serverState) => makeAction(Actions.SERVER_STATE_CHANGED, serverState),

  // modal
  showResolveModal: () => makeAction(Actions.SHOW_RESOLVE_MODAL),
  hideResolveModal: () => makeAction(Actions.HIDE_RESOLVE_MODAL),

  // remote actions
  request: (data) => makeRemoteAction(Actions.REQUEST, data),
};

module.exports = {
  ...Actions,
  ...ActionFunctions
};
