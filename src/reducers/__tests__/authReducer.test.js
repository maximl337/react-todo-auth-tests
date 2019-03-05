import authReducer from '../authReducer';
import {
  AUTH_USER,
  AUTH_ERROR
} from '../../actions/types';
import { authUser, authError } from '../../actions';

let INITIAL_STATE = {
    token: '',
    errorMessage: ''
  };

it('handles actions of type AUTH_USER', () => {

  const action = authUser('test123');

  const newState = authReducer(INITIAL_STATE, action);

  expect(newState).toEqual({
    token: 'test123',
    errorMessage: ''
  });

});

it('handles actions of type AUTH_ERROR', () => {

  const action = authError('');

  const newState = authReducer(INITIAL_STATE, action);

  expect(newState).toEqual({
    token: '',
    errorMessage: ''
  });
});