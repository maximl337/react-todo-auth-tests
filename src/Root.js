import React from 'react';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import logger from './middlewares/logger';

export const history = createBrowserHistory();

const INITIAL_STATE = { auth: { token: localStorage.getItem('token') || 'test123' } };

export default ({ children, initialState=INITIAL_STATE }) => {
  

  const store = createStore(
    reducers(history), 
    initialState,
    compose(
      applyMiddleware(
        reduxThunk,
        routerMiddleware(history),
        logger
      )
    )
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}