import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import * as actions from '../index';
import * as types from '../types';

describe('logout action', () => {
  it('has the correct type', () => {
    const action = actions.logout();
    expect(action.type).toEqual(types.AUTH_USER);
  });

  it('has the correct payload', () => {
    const action = actions.logout();
    expect(action.payload).toEqual('');
  });
});

describe('add todo actions', () => {
  it('has the correct type', () => {
    const action = actions.addTodo();
    expect(action.type).toEqual(types.ADD_TODO);
  });

  it('has the correct payload', () => {
    const action = actions.addTodo('todo', 1);
    expect(action.payload).toEqual({
      id: 1,
      body: 'todo',
      done: false
    });
  });
});

describe('remove todo actions', () => {
  it('has the correct type', () => {
    const action = actions.removeTodo();
    expect(action.type).toEqual(types.REMOVE_TODO);
  });

  it('has the correct payload', () => {
    const action = actions.removeTodo(1);
    expect(action.payload).toEqual(1);
  });
});

describe('edit todo actions', () => {
  it('has the correct type', () => {
    const action = actions.editTodo();
    expect(action.type).toEqual(types.EDIT_TODO);
  });

  it('has the correct payload', () => {
    const action = actions.editTodo(1, {
      body: 'update'
    });
    expect(action.payload).toEqual({
      id: 1,
      body: 'update'
    });
  });
});

describe('store previous pathname', () => {
  it('has the correct type', () => {
    const action = actions.storePrevPath();
    expect(action.type).toEqual(types.PREV_PATHNAME);
  });

  it('has the correct payload', () => {
    const action = actions.storePrevPath('foobar');
    expect(action.payload).toEqual('foobar');
  });
});



