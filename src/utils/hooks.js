import { useState, useEffect } from "react"

export const useDebounce = (fn, delay = 500) => {
    const [debounced, setDebounced] = useState(fn)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounced(fn)
        }, delay)

        return () => clearTimeout(timeout)
    }, [fn, delay])

    return debounced
}