import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(16)
  const [numberAllowed, setNumberAllowed] = useState(true)
  const [charAllowed, setCharAllowed] = useState(true)
  const [password, setPassword] = useState("")
  const [copied, setCopied] = useState(false)
  const [strength, setStrength] = useState('medium')

  const passwordRef = useRef(null)

  const calculateStrength = (pwd, len, nums, chars) => {
    let score = 0
    if (len >= 8) score++
    if (len >= 12) score++
    if (len >= 16) score++
    if (nums) score++
    if (chars) score++
    if (pwd.match(/[a-z]/) && pwd.match(/[A-Z]/)) score++

    if (score <= 2) return 'weak'
    if (score <= 4) return 'medium'
    return 'strong'
  }

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)
    setStrength(calculateStrength(pass, length, numberAllowed, charAllowed))
  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 999)
    window.navigator.clipboard.writeText(password)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [password])

  const getStrengthColor = () => {
    if (strength === 'weak') return 'text-red-500'
    if (strength === 'medium') return 'text-yellow-500'
    return 'text-green-500'
  }

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 flex items-center justify-center p-4 py-12">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
            🔐 Secure Password
          </h1>
          <p className="text-gray-400 text-lg">Generate unbreakable passwords instantly</p>
        </div>

        {/* Main Card */}
        <div className="bg-gradient-to-b from-slate-900 to-slate-800 rounded-2xl p-8 shadow-2xl border border-slate-700/50 backdrop-blur-xl">
          
          {/* Password Display Section */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-300 mb-3">Your Password</label>
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={password}
                  className="w-full bg-slate-800 border-2 border-slate-700 text-white px-5 py-4 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all font-mono text-lg tracking-wider"
                  placeholder="Click generate or change settings"
                  readOnly
                  ref={passwordRef}
                />
              </div>
              <button
                onClick={copyPasswordToClipboard}
                className={`px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                  copied
                    ? 'bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-500/50'
                    : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg shadow-blue-500/50'
                }`}
              >
                {copied ? (
                  <>
                    <span className="text-xl">✓</span>
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <span className="text-lg">📋</span>
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Strength Indicator */}
          <div className="mb-8 p-4 rounded-xl bg-slate-700/30 border border-slate-600/50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-300">Password Strength</span>
              <span className={`text-sm font-bold uppercase tracking-wider ${getStrengthColor()}`}>
                {strength}
              </span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-300 ${
                  strength === 'weak' ? 'w-1/3 bg-red-500' : strength === 'medium' ? 'w-2/3 bg-yellow-500' : 'w-full bg-green-500'
                }`}
              />
            </div>
          </div>

          {/* Controls Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            
            {/* Length Control */}
            <div className="bg-slate-700/40 rounded-xl p-6 border border-slate-600/50">
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-semibold text-gray-300">Password Length</label>
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-lg text-lg font-bold shadow-lg">
                  {length}
                </span>
              </div>
              <input
                type="range"
                min={6}
                max={128}
                value={length}
                className="w-full h-3 bg-slate-600 rounded-full appearance-none cursor-pointer accent-blue-500"
                onChange={(e) => setLength(Number(e.target.value))}
              />
              <div className="flex justify-between text-xs text-gray-400 mt-3">
                <span className="font-semibold">6</span>
                <span>Recommended: 16+</span>
                <span className="font-semibold">128</span>
              </div>
            </div>

            {/* Options Control */}
            <div className="bg-slate-700/40 rounded-xl p-6 border border-slate-600/50">
              <label className="text-sm font-semibold text-gray-300 block mb-4">Include Characters</label>
              <div className="space-y-3">
                {/* Numbers */}
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={numberAllowed}
                    onChange={() => setNumberAllowed((prev) => !prev)}
                    className="w-5 h-5 rounded-lg bg-slate-600 border-2 border-slate-500 cursor-pointer accent-blue-500"
                  />
                  <span className="text-gray-300 font-medium group-hover:text-blue-400 transition-colors">
                    Numbers (0-9)
                  </span>
                </label>

                {/* Special Chars */}
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={charAllowed}
                    onChange={() => setCharAllowed((prev) => !prev)}
                    className="w-5 h-5 rounded-lg bg-slate-600 border-2 border-slate-500 cursor-pointer accent-blue-500"
                  />
                  <span className="text-gray-300 font-medium group-hover:text-blue-400 transition-colors">
                    Special (!@#$%)
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={passwordGenerator}
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-green-500/50 hover:shadow-green-500/70 text-lg flex items-center justify-center gap-2"
          >
            <span className="text-2xl">⚡</span>
            <span>Generate New Password</span>
          </button>

          {/* Features */}
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div className="bg-slate-700/20 rounded-lg p-3 border border-slate-600/30">
              <div className="text-2xl mb-2">🔒</div>
              <p className="text-xs text-gray-400">Instant</p>
            </div>
            <div className="bg-slate-700/20 rounded-lg p-3 border border-slate-600/30">
              <div className="text-2xl mb-2">🛡️</div>
              <p className="text-xs text-gray-400">Secure</p>
            </div>
            <div className="bg-slate-700/20 rounded-lg p-3 border border-slate-600/30">
              <div className="text-2xl mb-2">📋</div>
              <p className="text-xs text-gray-400">Copy One-Click</p>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center mt-8 text-gray-400 text-sm">
          <p>✨ All passwords generated locally • No data stored • Always secure</p>
        </div>
      </div>
    </div>
  )
}

export default App