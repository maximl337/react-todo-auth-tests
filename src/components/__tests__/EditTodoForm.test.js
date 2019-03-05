import React from 'react';
import { shallow } from 'enzyme';
import EditTodoForm from '../EditTodoForm';

let wrapped;

const todo = {
  id: 1,
  body: 'foo',
  done: false
};

const handleEditTodo = jest.fn((id, todo) => {});

beforeEach(() => {
  wrapped = shallow(<EditTodoForm todo={todo} handleEditTodo={handleEditTodo} />);
});

it('should show input with correct value', () => {
  expect(wrapped.find('input').props().value).toEqual(todo.body);
});

it('should should update state based on input', () => {
  wrapped.find('input').simulate("change", { target: { value: "foo" }});
  expect(wrapped.state().body).toEqual("foo");
});

it('should should show a button', () => {
  expect(wrapped.find('button').length).toEqual(1);
});

it('should call handleEditTodo when clicked', () => {
  wrapped.find('button').simulate("click");
  expect(handleEditTodo.mock.calls.length).toEqual(1);
  expect(handleEditTodo.mock.calls[0][0]).toEqual(todo.id);
  expect(handleEditTodo.mock.calls[0][1]).toEqual(wrapped.state());
});

