import {CREATE_TODO} from './types'

export function createTodo(todo) {
    return {
        type: CREATE_TODO,
        payload: todo
    }
}
