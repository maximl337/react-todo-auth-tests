import React from 'react';
import { shallow } from 'enzyme';
import { Field } from 'redux-form';
import { TodoForm } from '../TodoForm';

let wrapped;

const formProps = {
  todo: 'foo'
}

const handleAddTodo = jest.fn((todo) => {});

const onSubmit = jest.fn((formProps) => { handleAddTodo() });

const handleSubmit = jest.fn((onSubmit) => { onSubmit(formProps) });

beforeEach(() => {
  wrapped = shallow(<TodoForm handleAddTodo={handleAddTodo} handleSubmit={handleSubmit} />);
});

it('should render an form', () => {
  expect(wrapped.find('form').length).toEqual(1);
});

it('should call handleAddTodo on submitting form', () => {
  wrapped.find('button').simulate("click");
  expect(handleSubmit.mock.calls.length).toEqual(2);
  expect(handleAddTodo.mock.calls.length).toEqual(2);
});