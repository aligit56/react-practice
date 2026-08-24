
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState(() => localStorage.getItem('theme') || 'light')
  const [cartCount, setCartCount] = useState(0)

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(themeMode)
    localStorage.setItem('theme', themeMode)
  }, [themeMode])
  

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="min-h-screen px-5 py-8 text-slate-900 transition-colors dark:text-slate-100 sm:px-8 sm:py-12">
        <header className="mx-auto flex w-full max-w-6xl items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-600 dark:text-amber-400">DevWeekend / 09</p>
            <h1 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">Theme Lab</h1>
          </div>
          <ThemeBtn />
        </header>

        <main className="mx-auto grid w-full max-w-6xl gap-10 pb-12 pt-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:pt-24">
          <section>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Light or dark, your call</p>
            <h2 className="max-w-xl text-5xl font-black leading-[0.95] tracking-[-0.06em] sm:text-7xl">A switch for <span className="text-amber-500">every mood.</span></h2>
            <p className="mt-6 max-w-md text-base leading-7 text-slate-600 dark:text-slate-300">A small React theme experiment powered by Context, Tailwind CSS, and a preference that survives refreshes.</p>
            <div className="mt-8 flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              {themeMode === 'dark' ? 'Dark mode active' : 'Light mode active'}
            </div>
          </section>
          <section aria-label="Product preview" className="lg:pl-10">
            <Card cartCount={cartCount} onAddToCart={() => setCartCount((count) => count + 1)} />
          </section>
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App