import { useEffect, useState } from "react"
import { useSetRecoilState } from "recoil"
import { moviesFilter } from "@/state/atom"

const DEBOUNCE_DELAY = 500

export const useSearchMovies = () => {
  const [input, setInput] = useState("")
  const setFilter = useSetRecoilState(moviesFilter)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFilter(prev => {
        const newSearch = input.trim() || undefined

        if (prev.search === newSearch) return prev

        return {
          ...prev,
          search: newSearch || '',
          page: 1
        }
      })
    }, DEBOUNCE_DELAY)

    return () => clearTimeout(timeout)
  }, [input, setFilter])

  return { input, setInput }
}