import React from 'react';
import { shallow } from 'enzyme';
import TodoItem from '../TodoItem';

let wrapped;
const todo = {
  id: 1,
  body: 'foo',
  done: false,
}

const onEditTodo = jest.fn((id, todo) => {});

beforeEach(() => {
  wrapped = shallow(<TodoItem onEditTodo={onEditTodo} todo={todo} />);
});

it('should show a li element', () => {
  expect(wrapped.find('li').length).toEqual(1)
});

it('should show 3 buttons', () => {
  expect(wrapped.find('button').length).toEqual(3);
});

it('should call onEditTodo when button is clicked', () => {
  wrapped.find('button#done_button').simulate("click");
  expect(onEditTodo.mock.calls.length).toEqual(1);
});

it('should not have done class when todo is not done', () => {
  expect(wrapped.find('strong').props().className).not.toEqual('done');
});

it('should have done class when todo is done', () => {
  const doneTodo = {
    id: 2,
    body: 'bar',
    done: true,
  };

  wrapped = shallow(<TodoItem todo={doneTodo} />);

  expect(wrapped.find('strong').props().className).toEqual('done');
});