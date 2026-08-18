import { useId } from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    const amountInputId = useId()

    return (
        <div className={`flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-sm ${className}`}>
            <div className="min-w-0 flex-1">
                <label htmlFor={amountInputId} className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="w-full bg-transparent py-1 text-2xl font-semibold text-slate-900 outline-none placeholder:text-slate-300"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="flex w-[42%] flex-wrap content-between justify-end text-right">
                <p className="mb-2 w-full text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Currency</p>
                <select
                    className="w-full cursor-pointer rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 font-semibold uppercase text-slate-700 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;