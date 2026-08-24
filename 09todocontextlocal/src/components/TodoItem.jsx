import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const {updateTodo, deleteTodo, toggleComplete} = useTodo()

  const editTodo = () => {
    const trimmedTodo = todoMsg.trim()
    if (!trimmedTodo) return
    updateTodo(todo.id, { todo: trimmedTodo })
    setIsTodoEditable(false)
  }
  const toggleCompleted = () => {
    //console.log(todo.id);
    toggleComplete(todo.id)
  }

  return (
      <div
          className={`flex items-center gap-3 rounded-xl border px-3 py-3 shadow-sm duration-300 ${
              todo.completed ? "border-[#c8dfc5] bg-[#eef7ea] text-[#71816c]" : "border-[#e5ded2] bg-[#fcfbf8] text-[#20231f]"
          }`}
      >
          <input
              type="checkbox"
              className="h-4 w-4 cursor-pointer accent-[#b05c3b]"
              checked={todo.completed}
              onChange={toggleCompleted}
          />
          <input
              type="text"
              className={`min-w-0 flex-1 rounded-lg border bg-transparent px-2 py-1 text-sm outline-none ${
                  isTodoEditable ? "border-[#d8d1c4] bg-white" : "border-transparent"
              } ${todo.completed ? "line-through" : ""}`}
              value={todoMsg}
              onChange={(e) => setTodoMsg(e.target.value)}
              readOnly={!isTodoEditable}
          />
          {/* Edit, Save Button */}
          <button
              aria-label={isTodoEditable ? "Save todo" : "Edit todo"}
              type="button"
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#e5ded2] bg-white text-sm hover:bg-[#f7f4ed] disabled:cursor-not-allowed disabled:opacity-40"
              onClick={() => {
                  if (todo.completed) return;

                  if (isTodoEditable) {
                      editTodo();
                  } else setIsTodoEditable((prev) => !prev);
              }}
              disabled={todo.completed}
          >
              {isTodoEditable ? "Save" : "Edit"}
          </button>
          {/* Delete Todo Button */}
          <button
              aria-label="Delete todo"
              type="button"
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#e5ded2] bg-white text-sm text-[#b05c3b] hover:bg-[#fff1eb]"
              onClick={() => deleteTodo(todo.id)}
          >
              X
          </button>
      </div>
  );
}

export default TodoItem;