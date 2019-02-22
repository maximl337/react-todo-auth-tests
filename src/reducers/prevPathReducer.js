import { PREV_PATHNAME } from '../actions/types';

const INITIAL_STATE = {
  pathname: '/'
};
export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case PREV_PATHNAME:
      return { ...state, pathname: action.payload };
    default:
      return state;
  }
}