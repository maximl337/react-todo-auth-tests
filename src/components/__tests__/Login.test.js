import React from 'react';
import { mount } from 'enzyme';
import Login from '../Login';
import Root from '../../Root';
import * as actions from '../../actions';
import * as types from '../../actions/types';

let wrapped;

beforeEach(() => {
  const initialState = {
    auth: {
      token: ''
    },
    prevPath: {
      pathname: '/foo'
    }
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <Login />
    </Root>
  );
});

it('should render a form', () => {
  expect(wrapped.find('form').length).toEqual(1);
});

it('should render email and password field', () => {
  expect(wrapped.find('input').length).toEqual(2);
});

it('should render login button', () => {
  expect(wrapped.find('button').length).toEqual(1);
});