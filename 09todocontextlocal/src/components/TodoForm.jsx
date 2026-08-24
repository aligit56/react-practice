import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
      e.preventDefault()

    const trimmedTodo = todo.trim()
    if (!trimmedTodo) return

    addTodo({ todo: trimmedTodo, completed: false })
      setTodo("")
    }

  return (
    <form onSubmit={add} className="flex flex-col gap-3 sm:flex-row">
          <input
              type="text"
              placeholder="What needs doing?"
              aria-label="New todo"
              className="w-full rounded-lg border border-[#d8d1c4] bg-[#fcfbf8] px-4 py-3 text-sm outline-none duration-150 placeholder:text-[#a5a398] focus:border-[#b05c3b] focus:ring-4 focus:ring-[#b05c3b]/10"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" className="shrink-0 rounded-lg bg-[#b05c3b] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#93472e] focus:outline-none focus:ring-4 focus:ring-[#b05c3b]/20">
              Add task
          </button>
      </form>
  );
}

export default TodoForm;