import { useEffect, useState } from 'react'
import {TodoProvider} from './contexts'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('todos')) || []
    } catch {
      return []
    }
  })
  const [filter, setFilter] = useState('all')

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? { ...prevTodo, ...todo } : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const remainingTodos = todos.filter((todo) => !todo.completed).length
  const visibleTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  const clearCompleted = () => setTodos((prev) => prev.filter((todo) => !todo.completed))



  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="min-h-screen bg-[#f7f4ed] px-4 py-8 text-[#20231f] sm:px-8 sm:py-14">
        <main className="mx-auto max-w-3xl">
          <header className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#b05c3b]">DevWeekend / 10</p>
              <h1 className="text-4xl font-black tracking-[-0.05em] sm:text-6xl">Small steps.<br /><span className="text-[#b05c3b]">Done daily.</span></h1>
            </div>
            <p className="hidden max-w-[150px] text-right text-sm leading-5 text-[#72766c] sm:block">A focused local space for the things worth finishing.</p>
          </header>
          <section className="rounded-2xl border border-[#ded8cc] bg-white p-5 shadow-[0_20px_60px_rgba(65,53,35,0.1)] sm:p-8">
            <TodoForm />
            <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-b border-[#ebe6dc] pb-4">
              <p className="text-sm font-semibold text-[#72766c]">{remainingTodos} {remainingTodos === 1 ? 'task' : 'tasks'} left</p>
              <div className="flex items-center gap-1 rounded-lg bg-[#f7f4ed] p-1" aria-label="Filter todos">
                {['all', 'active', 'completed'].map((option) => (
                  <button key={option} type="button" onClick={() => setFilter(option)} className={`rounded-md px-3 py-1.5 text-xs font-bold capitalize transition ${filter === option ? 'bg-[#20231f] text-white' : 'text-[#72766c] hover:text-[#20231f]'}`}>
                    {option}
                  </button>
                ))}
              </div>
              <button type="button" onClick={clearCompleted} className="text-xs font-bold text-[#b05c3b] hover:underline">Clear completed</button>
            </div>
            <div className="mt-5 space-y-3">
              {visibleTodos.length > 0 ? visibleTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />) : <p className="rounded-xl border border-dashed border-[#d8d1c4] px-4 py-10 text-center text-sm text-[#8b8e84]">Nothing here yet. Add your first task above.</p>}
            </div>
          </section>
          <p className="mt-5 text-center text-xs text-[#8b8e84]">Saved automatically in your browser</p>
        </main>
      </div>
    </TodoProvider>
  )
}

export default App