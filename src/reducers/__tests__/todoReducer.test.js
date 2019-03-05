import todoReducer from '../todoReducer';
import {
  ADD_TODO,
  REMOVE_TODO,
  EDIT_TODO
} from '../../actions/types';
import {
  addTodo,
  removeTodo,
  editTodo
} from '../../actions';

it('handles actions of type ADD_TODO', () => {
  const action = addTodo('todo', 1);

  const newState = todoReducer([], action);

  expect(newState).toEqual([
    action.payload
  ])
});

it('handles actions of type REMOVE_TODO', () => {
  const action = removeTodo(2);

  const INITIAL_STATE = [
    addTodo('todo', 1).payload,
    addTodo('todo', 2).payload,
    addTodo('todo', 3).payload,
  ];

  const newState = todoReducer(INITIAL_STATE, action);

  expect(newState).toEqual([
    addTodo('todo', 1).payload,
    addTodo('todo', 3).payload
  ])
});

it('handles actions of type EDIT_TODO', () => {
  const action = editTodo(1, {
    body: 'update',
    done: true
  });

  const INITIAL_STATE = [
    addTodo('todo', 1).payload,
  ];

  const newState = todoReducer(INITIAL_STATE, action);

  expect(newState).toEqual([
    action.payload
  ])
});