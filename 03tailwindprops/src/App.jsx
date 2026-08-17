import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="px-6 py-8">
      <h1 className="text-3xl font-bold bg-green-500 rounded-full p-4 text-center mb-6">
        Tailwind Test
      </h1>

      <div className="max-w-xl mx-auto">
        <Card title={"Muhammad Ali doing DevWeekend task"} token={"#007"} />
      </div>
    </div>
  )
}

export default App
