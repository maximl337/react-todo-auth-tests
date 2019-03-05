import prevPathReducer from '../prevPathReducer';
import { PREV_PATHNAME } from '../../actions/types';
import { storePrevPath } from '../../actions';

it('handles actions of type PREV_PATH', () => {
  const action = storePrevPath('foobar');

  const newState = prevPathReducer({ pathname: '/' }, action);

  expect(newState).toEqual({ pathname: action.payload });
});