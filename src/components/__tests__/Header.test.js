import React from 'react';
import { mount } from 'enzyme';
import Header from '../Header';
import { Link } from 'react-router-dom';
import Root from '../../Root';


let wrappedAuthenticated;

let wrappedUnauthenticated;

beforeEach(() => {
  const authenticatedState = {
    auth: {
      'token': 'test123'
    }
  }
  const unauthenticatedState = {
    auth: {
      'token': ''
    }
  }
  wrappedAuthenticated = mount(
    <Root initialState={authenticatedState}>
      <Header />
    </Root>
  );
  wrappedUnauthenticated = mount(
    <Root initialState={unauthenticatedState}>
      <Header />
    </Root>
  );
}); // EO beforeEach

afterEach(() => {
  wrappedAuthenticated.unmount();
  wrappedUnauthenticated.unmount();
}); // EO afterEach

it('shows a single ul', () => {
  expect(wrappedAuthenticated.find('ul').length).toEqual(1);
});


it('always shows atleast 3 links', () => {
  expect(wrappedAuthenticated.find(Link).length).toBeGreaterThanOrEqual(3);
  expect(wrappedUnauthenticated.find(Link).length).toBeGreaterThanOrEqual(3);
});

it('shows Login link when unauthenticated', () => {
  expect(wrappedUnauthenticated.find({ to: '/login'}).length).toEqual(1);
  expect(wrappedUnauthenticated.find({ to: '/login'}).text()).toEqual('Login');
});

it('shows Logout button when authenticated', () => {
  expect(wrappedAuthenticated.find('button').length).toEqual(1);
   expect(wrappedAuthenticated.find('button').text()).toEqual('Logout');
});