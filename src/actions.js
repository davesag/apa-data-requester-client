import {makeAction, makeRemoteAction} from './actionMaker';

const ActionList = [
  'CHANGED_TAB',          // internal
  'HIDE_RESOLVE_MODAL',
  'REQUESTED',            // remote action sent to server with request data as payload.
  'RESPONDED',            // comes from server: payload the response
  'SERVER_STATE_CHANGED', // comes from server: payload the filtered server state.
  'SHOW_RESOLVE_MODAL'
];

const Actions = ActionList.reduce((acc, elem) => { acc[elem] = elem; return acc; }, {});

const ActionFunctions = {
  serverStateChanged: (serverState) => makeAction(Actions.SERVER_STATE_CHANGED, serverState),
  changedTab:    (index, prevIndex) => makeAction(Actions.CHANGED_TAB, {index, prevIndex}),

  // modal
  showResolveModal: () => makeAction(Actions.SHOW_RESOLVE_MODAL),
  hideResolveModal: () => makeAction(Actions.HIDE_RESOLVE_MODAL),

  // remote actions
  requested: (data) => makeRemoteAction(Actions.REQUESTED, data),
};

module.exports = {
  ...Actions,
  ...ActionFunctions
};
