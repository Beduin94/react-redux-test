import {CHANGE_FILTER} from './types'

const initialState = {
  origin: "all"
}

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return { ...state, origin: action.payload }
    default: return state
  }
}
