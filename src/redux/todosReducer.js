import {CHECKED_TODO, CREATE_TODO} from './types'

const initialState = {
  origin: []
}

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return { ...state, origin: state.origin.concat([action.payload]) }
    case CHECKED_TODO:
      const { payload: newTodo } = action;
      return {
        ...state,
        origin: state.origin.map(todo => {
          if(todo.id === newTodo.id) {
            return {
              ...todo,
              checked: newTodo.checked,
            }
          }
          return todo;
        })
      };
    default: return state
  }
}
