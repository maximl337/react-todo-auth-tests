import React from 'react';
import { mount } from 'enzyme';
import TodoItem from '../TodoItem';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList';
import Root from '../../Root';

let wrapped;

const todos = [{
  id: 1,
  body: 'foo',
  done: false
}];

beforeEach(() => {
  const initialState = {
    todos
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <TodoList />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('should show a ul', () => {
  expect(wrapped.find('ul').length).toEqual(1);
});

it('should show "show_addtodo_button"', () => {
  expect(wrapped.find('button#show_addtodo_button').length).toEqual(1);
});

it('should hide "show_addtodo_button" when showAddTodo is true', () => {
  wrapped.find('button#show_addtodo_button').simulate('click');
  expect(wrapped.find('button#show_addtodo_button').length).toEqual(0);
  expect(wrapped.find(TodoForm).length).toEqual(1);
});

it('should show TodoItem', () => {
  expect(wrapped.find(TodoItem).length).toEqual(1);
});