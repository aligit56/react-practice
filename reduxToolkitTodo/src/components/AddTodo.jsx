import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice' 

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
      if (!input.trim()) return
      dispatch(addTodo(input.trim()))
        setInput('')
    }

  return (
    <form onSubmit={addTodoHandler} className="flex flex-col gap-3 sm:flex-row">
      <input
        type="text"
        aria-label="New todo"
        className="w-full rounded-lg border border-[#d8d1c4] bg-[#fcfbf8] px-4 py-3 text-sm outline-none placeholder:text-[#a5a398] focus:border-[#b05c3b] focus:ring-4 focus:ring-[#b05c3b]/10"
        placeholder="What needs doing?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="shrink-0 rounded-lg bg-[#b05c3b] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#93472e] focus:outline-none focus:ring-4 focus:ring-[#b05c3b]/20"
      >
        Add task
      </button>
    </form>
  )
}

export default AddTodo