import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearCompleted, removeTodo, toggleTodo, editTodo } from '../features/todo/todoSlice'
import { useState } from 'react'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const [filter, setFilter] = useState('all')
    const visibleTodos = todos.todos.filter((todo) => filter === 'all' || (filter === 'active' ? !todo.completed : todo.completed))
    const remaining = todos.todos.filter((todo) => !todo.completed).length

  return (
    <div className="mt-8">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#ebe6dc] pb-4">
        <div>
          <h2 className="text-xl font-black tracking-tight">Your list</h2>
          <p className="mt-1 text-sm text-[#72766c]">{remaining} {remaining === 1 ? 'task' : 'tasks'} left</p>
        </div>
        <div className="flex items-center gap-1 rounded-lg bg-[#f4f1ea] p-1" aria-label="Filter todos">
          {['all', 'active', 'completed'].map((option) => <button key={option} type="button" onClick={() => setFilter(option)} className={`rounded-md px-3 py-1.5 text-xs font-bold capitalize ${filter === option ? 'bg-[#20231f] text-white' : 'text-[#72766c]'}`}>{option}</button>)}
        </div>
        <button type="button" onClick={() => dispatch(clearCompleted())} className="text-xs font-bold text-[#b05c3b] hover:underline">Clear completed</button>
      </div>
      <ul className="mt-5 list-none space-y-3 p-0">
        {visibleTodos.length > 0 ? visibleTodos.map((todo) => (
          <li
            className={`flex items-center gap-3 rounded-xl border px-3 py-3 ${todo.completed ? 'border-[#c8dfc5] bg-[#eef7ea]' : 'border-[#e5ded2] bg-[#fcfbf8]'}`}
            key={todo.id}
          >
            <input type="checkbox" checked={todo.completed} onChange={() => dispatch(toggleTodo(todo.id))} className="h-4 w-4 accent-[#b05c3b]" aria-label={`Mark ${todo.text} complete`} />
            <TodoText todo={todo} dispatch={dispatch} />
            <button
              type="button"
              onClick={() => dispatch(removeTodo(todo.id))}
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#e5ded2] bg-white text-sm font-bold text-[#b05c3b] hover:bg-[#fff1eb]"
              aria-label={`Delete ${todo.text}`}
            >
              X
            </button>
          </li>
        )) : <li className="rounded-xl border border-dashed border-[#d8d1c4] px-4 py-10 text-center text-sm text-[#8b8e84]">Nothing here yet. Add your first task above.</li>}
      </ul>
    </div>
  )
}

function TodoText({ todo, dispatch }) {
  const [editing, setEditing] = useState(false)
  const [text, setText] = useState(todo.text)
  const save = () => {
    if (text.trim()) dispatch(editTodo({ id: todo.id, text }))
    setEditing(false)
  }

  return editing ? <input autoFocus value={text} onChange={(event) => setText(event.target.value)} onKeyDown={(event) => event.key === 'Enter' && save()} className="min-w-0 flex-1 rounded-lg border border-[#d8d1c4] bg-white px-2 py-1 text-sm outline-none focus:border-[#b05c3b]" aria-label="Edit todo" /> : <><span className={`min-w-0 flex-1 break-words text-sm ${todo.completed ? 'text-[#71816c] line-through' : 'text-[#20231f]'}`}>{todo.text}</span>{!todo.completed && <button type="button" onClick={() => setEditing(true)} className="rounded-lg border border-[#e5ded2] bg-white px-2.5 py-1.5 text-xs font-bold text-[#72766c] hover:bg-[#f4f1ea]" aria-label={`Edit ${todo.text}`}>Edit</button>}</>
}

export default Todos