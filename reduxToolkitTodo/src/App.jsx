import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    <>
      <div className="min-h-screen bg-[#f4f1ea] px-4 py-8 text-[#20231f] sm:px-8 sm:py-14">
        <main className="mx-auto max-w-3xl">
          <header className="mb-10 flex items-end justify-between gap-5">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#b05c3b]">DevWeekend / Redux Toolkit</p>
              <h1 className="text-4xl font-black tracking-[-0.06em] sm:text-6xl">Ship the <span className="text-[#b05c3b]">important</span> things.</h1>
            </div>
            <p className="hidden max-w-[150px] text-right text-sm leading-5 text-[#72766c] sm:block">A focused todo list powered by one predictable store.</p>
          </header>
          <section className="rounded-2xl border border-[#ded8cc] bg-white p-5 shadow-[0_20px_60px_rgba(65,53,35,0.1)] sm:p-8">
            <AddTodo />
            <Todos />
          </section>
          <p className="mt-5 text-center text-xs text-[#8b8e84]">State managed with Redux Toolkit</p>
        </main>
      </div>
    </>
  )
}

export default App