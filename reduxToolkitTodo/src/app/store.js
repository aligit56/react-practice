import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

let storedTodos = null
try {
    storedTodos = JSON.parse(localStorage.getItem('redux-todos') || 'null')
} catch {
    localStorage.removeItem('redux-todos')
}

export const store = configureStore({
    reducer: {
        todos: todoReducer,
    },
    preloadedState: storedTodos ? { todos: { todos: storedTodos } } : undefined,
})

store.subscribe(() => {
    localStorage.setItem('redux-todos', JSON.stringify(store.getState().todos.todos))
})