import React from 'react';
import { mount, shallow } from 'enzyme';
import Root from '../../Root';
import Dashboard from '../Dashboard';
import TodoList from '../TodoList';

let wrapped;

beforeEach(() => {
  const initialState = {
    auth: {
      token: 'test123'
    }
  };
  wrapped = mount(
    <Root initialState={initialState}>
      <Dashboard />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount()
});

it('shows page title', () => {
  expect(wrapped.find('h2').length).toEqual(1);
  expect(wrapped.find('h2').text()).toEqual('Todos');
});

it('shows TodoList', () => {
  expect(wrapped.find(TodoList).length).toEqual(1);
});