import {CREATE_TODO, CHECKED_TODO} from './types'

export function createTodo(todo) {
    return {
        type: CREATE_TODO,
        payload: todo
    }
}

export function checkedTodo(todo) {
    return {
        type: CHECKED_TODO,
        payload: todo
    }
}
