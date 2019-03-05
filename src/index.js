import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Root, { history } from './Root';

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.getElementById('root')
);

