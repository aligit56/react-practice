import { useState, useMemo } from 'react'
import './App.css'

const PRESET_COLORS = [
  { name: 'Red', value: '#ef4444' },
  { name: 'Green', value: '#10b981' },
  { name: 'Blue', value: '#3b82f6' },
  { name: 'Purple', value: '#7c3aed' },
  { name: 'Orange', value: '#f97316' },
  { name: 'Teal', value: '#14b8a6' },
  { name: 'Indigo', value: '#4f46e5' },
  { name: 'Slate', value: '#64748b' },
]

function randomHex() {
  return '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')
}

function App() {
  const [color, setColor] = useState('#0f1724')
  const [useGradient, setUseGradient] = useState(false)
  const [secondary, setSecondary] = useState('#1f2937')

  const bgStyle = useMemo(() => {
    if (useGradient) return { background: `linear-gradient(135deg, ${color}, ${secondary})` }
    return { backgroundColor: color }
  }, [color, useGradient, secondary])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(color)
      alert('Copied ' + color)
    } catch (e) {
      alert('Copy failed')
    }
  }

  return (
    <div className="w-full h-screen text-white" style={{ ...bgStyle, transition: 'background 250ms ease' }}>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6">Background Changer</h1>

        <div className="bg-white/10 rounded-xl p-4 mb-6 shadow">
          <div className="flex flex-wrap gap-3">
            {PRESET_COLORS.map((c) => (
              <button
                key={c.value}
                onClick={() => setColor(c.value)}
                className="w-10 h-10 rounded-full border-2 border-white/30 shadow"
                style={{ backgroundColor: c.value }}
                title={c.name}
              />
            ))}

            <button
              onClick={() => setColor(randomHex())}
              className="px-3 py-1 ml-2 rounded-md bg-white text-black"
            >
              Random
            </button>
          </div>

          <div className="mt-4 flex items-center gap-3 flex-wrap">
            <label className="flex items-center gap-2">
              <span className="text-sm">Custom:</span>
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-10 h-10 p-0 border-0 bg-transparent"
              />
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" checked={useGradient} onChange={(e) => setUseGradient(e.target.checked)} />
              <span className="text-sm">Use gradient</span>
            </label>

            {useGradient && (
              <label className="flex items-center gap-2">
                <span className="text-sm">To:</span>
                <input type="color" value={secondary} onChange={(e) => setSecondary(e.target.value)} />
              </label>
            )}

            <div className="ml-auto flex items-center gap-2">
              <div className="font-mono px-3 py-1 bg-white/10 rounded">{useGradient ? `${color} → ${secondary}` : color}</div>
              <button onClick={copy} className="px-3 py-1 bg-white/20 rounded">Copy</button>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-white/80">Tip: use the color picker or presets to change the page background.</div>
      </div>
    </div>
  )
}

export default App
