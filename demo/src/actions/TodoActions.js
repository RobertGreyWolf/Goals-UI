import * as types from './actionTypes';
export function createTodo(todo){
    return {type: types.CREATE_TODO,todo};
}

export function removeTodo(todo){
    return {type: types.REMOVE_TODO,todo};
}

export function updateTodo(todo){
    return {type: types.UPDATE_TODO,todo};
}