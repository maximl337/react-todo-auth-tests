import axios from 'axios';
import { 
  AUTH_USER, 
  AUTH_ERROR, 
  PREV_PATHNAME, 
  ADD_TODO, 
  REMOVE_TODO,
  EDIT_TODO } from './types';
import * as api from '../api';

export const login = (formProps, cb) => {
  return (dispatch) => {
    // clear auth error
    dispatch(authError(''));
    const { email, password } = formProps;
    return axios.post('http://58c7004cfff8f21200a7c94b.mockapi.io/api/v1/signin', {
      email,
      password
    }).then(resp => {
      dispatch(authUser(resp.data.token));
    })
    .catch(err => {
      dispatch(authError(err.response.data.message));
    })
    .then(() => cb());
  }
}

export const authUser = (token) => {
  return {
    type: AUTH_USER,
    payload: token
  }
}

export const authError = (error) => {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export const logout = () => {
  return {
    type: AUTH_USER,
    payload: ''
  }
}

export const storePrevPath = (pathname) => {
  return {
    type: PREV_PATHNAME,
    payload: pathname
  }
}

export const addTodo = (todo, id) => {
  return {
    type: ADD_TODO,
    payload: {
      body: todo,
      id,
      done: false
    }
  };
}

export const removeTodo = (todoId) => {
  return {
    type: REMOVE_TODO,
    payload: todoId
  };
}

export const editTodo = (todoId, todo) => {
  return {
    type: EDIT_TODO,
    payload: {
      id: todoId,
      ...todo
    }
  }
}