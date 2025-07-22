import { useEffect, useRef, useState } from "react"


export const useDebounce = (value: string, delay: number = 500) => {
    const [debouncedValue, setDebouncedValue] = useState("")
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {

        timerRef.current = setTimeout(() => setDebouncedValue(value), delay)
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current)
            }
        }
    }, [value, delay])
    return debouncedValue
}