import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import hero from './assets/hero.png'

const CURRENCY_OPTIONS = [
    'usd', 'inr', 'pkr', 'eur', 'gbp', 'jpy', 'cny', 'chf', 'aud',
    'cad', 'nzd', 'sgd', 'aed', 'sar', 'bdt', 'try', 'zar', 'myr',
    'thb', 'krw', 'sek', 'nok', 'dkk',
]

function App() {

    const [amount, setAmount] = useState('')
    const [from, setFrom] = useState('usd')
    const [to, setTo] = useState('inr')
    const [convertedAmount, setConvertedAmount] = useState('')

    const { data: currencyInfo, isLoading, error } = useCurrencyInfo(from)

    const options = Array.from(new Set([...CURRENCY_OPTIONS, ...Object.keys(currencyInfo)]))

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount('')
  }
  
  const convert = () => {
    const rate = currencyInfo[to]
        if (amount !== '' && rate !== undefined) {
                setConvertedAmount((Number(amount) * rate).toFixed(2))
        }
  }

  return (
    <div
        className="relative min-h-screen overflow-hidden bg-slate-950 bg-cover bg-center bg-no-repeat px-4 py-8 sm:px-6"
        style={{
            backgroundImage: "linear-gradient(120deg, rgba(5, 8, 25, .92), rgba(31, 18, 58, .75)), url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1800')",
        }}
    >
        <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="relative z-10 m-auto w-full max-w-xl">
            <header className="mb-6 flex items-center gap-3 text-white">
                <img src={hero} alt="" className="h-12 w-12 object-contain" />
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-fuchsia-200">Pocket rates</p>
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Currency converter</h1>
                </div>
            </header>
            <div className="rounded-[2rem] border border-white/30 bg-white/90 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-7">
                <div className="mb-6 flex items-end justify-between gap-4">
                    <div>
                        <p className="text-sm font-medium text-slate-500">Convert money in a few seconds</p>
                        <p className="mt-1 text-xs text-slate-400">Rates refresh automatically when you change the source.</p>
                    </div>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">Live rates</span>
                </div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => {
                                setFrom(currency)
                                setConvertedAmount('')
                            }}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => {
                                setTo(currency)
                                setConvertedAmount('')
                            }}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    {error && <p className="mb-3 text-center text-xs font-medium text-amber-700">{error}</p>}
                    <button type="submit" disabled={isLoading || amount === ''} className="w-full rounded-2xl bg-slate-950 px-4 py-4 font-semibold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-50">
                        {isLoading ? 'Refreshing rates...' : `Convert ${from.toUpperCase()} to ${to.toUpperCase()}`}
                    </button>
                </form>
                <p className="mt-5 text-center text-xs text-slate-400">Your conversion stays in this browser.</p>
            </div>
        </div>
    </div>
);
}

export default App