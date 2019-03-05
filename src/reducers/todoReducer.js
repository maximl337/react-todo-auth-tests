import { 
  ADD_TODO, 
  REMOVE_TODO,
  EDIT_TODO
} from '../actions/types';

export default function(state=[], action) {
  switch(action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      let todoIndex = state.findIndex(todo => todo.id === action.payload);
      return [
        ...state.slice(0, todoIndex),
        ...state.slice(todoIndex + 1)
      ];
    case EDIT_TODO:
      const todoInd = state.findIndex(todo => todo.id === action.payload.id);
      return [
        ...state.slice(0, todoInd),
        {...state[todoInd], ...action.payload},
        ...state.slice(todoInd+1)
      ];
    default:
      return state;
  }
}