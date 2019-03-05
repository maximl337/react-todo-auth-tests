import React from 'react';
import { mount } from 'enzyme';
import Profile from '../Profile';
import Login from '../Login';
import Root from '../../Root';
import requireAuth from '../requireAuth';

it('should render the component when user is authenticated', () => {
  const initialState = {
    auth: {
      token: 'test123'
    }
  }

  const ProfileComponent = requireAuth()(Profile);

  const wrappedAuthenticated = mount(
    <Root initialState={initialState}>
      <ProfileComponent history={[]} />
    </Root>
  );
  expect(wrappedAuthenticated.find(Profile).length).toEqual(1);
  expect(wrappedAuthenticated.find(Profile).props().history).not.toContain('/login');
  wrappedAuthenticated.unmount();
});

it('should render Login component when user is not authenticated', () => {
  const unAuthenticatedState = {
    auth: {
      token: ''
    },
    router: {
      location: '/foo'
    }
  }
  const ProfileComponent = requireAuth()(Profile);
  const wrappedUnauthenticated = mount(
    <Root initialState={unAuthenticatedState}>
      <ProfileComponent history={[]} />
    </Root>
  );
  
  expect(wrappedUnauthenticated.find(Profile).props().history).toContain('/login');

  wrappedUnauthenticated.unmount();
});