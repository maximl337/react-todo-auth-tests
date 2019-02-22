import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import App from './components/App';
import Root, { history } from './Root';

ReactDOM.render(
  <Root>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Root>,
  document.getElementById('root')
);

