import { useEffect, useState } from 'react'

const usdRates = {
    usd: 1,
    eur: 1.09,
    gbp: 1.27,
    inr: 0.012,
    pkr: 0.00358,
    jpy: 0.00635,
    cny: 0.138,
    chf: 1.17,
    aud: 0.65,
    cad: 0.73,
    nzd: 0.60,
    sgd: 0.74,
    aed: 0.2723,
    sar: 0.2666,
    bdt: 0.0083,
    try: 0.028,
    zar: 0.055,
    myr: 0.22,
    thb: 0.029,
    krw: 0.00073,
    sek: 0.095,
    nok: 0.094,
    dkk: 0.146,
}

const getFallbackRates = (currency) => {
    const baseRate = usdRates[currency] || 1

    return Object.fromEntries(
        Object.entries(usdRates).map(([target, targetRate]) => [
            target,
            Number((baseRate / targetRate).toFixed(8)),
        ]),
    )
}

function useCurrencyInfo(currency) {
    const [data, setData] = useState(getFallbackRates(currency))
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        const controller = new AbortController()
        setIsLoading(true)
        setError('')
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`, {
            signal: controller.signal,
        })
        .then((res) => {
            if (!res.ok) throw new Error('Unable to load exchange rates')
            return res.json()
        })
        .then((res) => setData(res[currency] || getFallbackRates(currency)))
        .catch((fetchError) => {
            if (fetchError.name !== 'AbortError') {
                setData(getFallbackRates(currency))
                setError('Live rates unavailable. Showing estimated rates.')
            }
        })
        .finally(() => setIsLoading(false))

        return () => controller.abort()
    }, [currency])

    return { data, isLoading, error }
}

export default useCurrencyInfo