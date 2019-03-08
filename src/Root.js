import React from 'react';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

export const history = createBrowserHistory();

const INITIAL_STATE = { auth: { token: localStorage.getItem('token') } };


export default ({ children, initialState=INITIAL_STATE }) => {
  

  const store = createStore(
    reducers(history), 
    initialState,
    compose(
      applyMiddleware(
        reduxThunk,
        routerMiddleware(history)
      )
    )
  );

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        {children}
      </ConnectedRouter>
    </Provider>
  );
}