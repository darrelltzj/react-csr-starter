import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createReducer } from 'redux-act';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import initState from './_initState';
import reducers from './_reducers';

export const history = createBrowserHistory();

export default createStore(
  combineReducers({
    app: createReducer(reducers, initState),
    router: connectRouter(history),
  }),
  // redux-devtools-extension()
  applyMiddleware(thunk, routerMiddleware(history)),
);
