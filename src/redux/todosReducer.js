import {CREATE_TODO} from './types'

const initialState = {
  todos: []
}

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return { ...state, todos: state.todos.concat([action.payload]) }
    default: return state
  }
}
