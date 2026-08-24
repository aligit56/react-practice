import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false,
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find((item) => item.id === action.payload)
            if (todo) todo.completed = !todo.completed
        },
        editTodo: (state, action) => {
            const todo = state.todos.find((item) => item.id === action.payload.id)
            if (todo && action.payload.text.trim()) todo.text = action.payload.text.trim()
        },
        clearCompleted: (state) => {
            state.todos = state.todos.filter((todo) => !todo.completed)
        },
    }
})

export const { addTodo, removeTodo, toggleTodo, editTodo, clearCompleted } = todoSlice.actions

export default todoSlice.reducer