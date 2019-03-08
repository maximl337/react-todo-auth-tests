import React from 'react';
import { mount } from 'enzyme';
import Root from '../Root';
import App from '../components/App';
import Login from '../components/Login';
import Welcome from '../components/Welcome';


// check if login shows
it('logs in and shows welcome page', () => {
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  expect(wrapped.find(Welcome).length).toEqual(1);

  wrapped.unmount();
});