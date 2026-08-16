import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter]  = useState(15)

  //let counter = 15

  const addValue = () => {
    setCounter(prev => Math.min(prev + 1, 25))
  }

  const removeValue = () => {
    setCounter(prev => Math.max(prev - 1, 0))
  }
  
  return (
    <div className="app-root">
      <header className="app-header">
        <div className="logos">
          <img src={reactLogo} alt="React" className="logo" />
          <img src={viteLogo} alt="Vite" className="logo" />
        </div>
        <h1>Dev Weekend — Counter</h1>
      </header>

      <main id="center">
        <section className="counter-card">
          <div className="counter-display">
            <span className="label">Counter</span>
            <span
              className={`counter-value ${counter === 0 ? 'zero' : ''} ${counter === 25 ? 'max' : ''}`}
            >
              {counter}
            </span>
          </div>

          <div className="controls">
            <button
              className="btn remove"
              onClick={removeValue}
              disabled={counter <= 0}
              aria-label="Decrease value"
            >
              − Remove
            </button>

            <button
              className="btn add"
              onClick={addValue}
              disabled={counter >= 25}
              aria-label="Increase value"
            >
              + Add
            </button>
          </div>

          <p className="footer">Range: 0 — 25</p>
        </section>
      </main>
    </div>
  )
}

export default App