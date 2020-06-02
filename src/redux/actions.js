import {CREATE_TODO, CHECKED_TODO, CHANGE_FILTER} from './types'

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

export function changeFilter(filter) {
    return {
        type: CHANGE_FILTER,
        payload: filter
    }
}
