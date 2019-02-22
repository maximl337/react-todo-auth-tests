import { logout, login } from '../index';
import { AUTH_USER, AUTH_ERROR } from '../types';

describe('logout action', () => {
  it('has the correct type', () => {
    const action = logout();

    expect(action.type).toEqual(AUTH_USER);
  });

  it('has the correct payload', () => {
    const action = logout();

    expect(action.payload).toEqual('');
  });
}); 

