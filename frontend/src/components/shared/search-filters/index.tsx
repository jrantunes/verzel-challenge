import { ChevronDownIcon } from "@radix-ui/react-icons"

import styles from "./styles.module.scss"
import { useGenresList } from "@/state/hooks/useGenresList"
import { useState } from "react"
import type { Genre } from "@/types/movie/genre"

export const SearchFilters = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre>()
  const genres = useGenresList()

  return (
    <div className={styles.wrapper}>
      <div>
        <h3>BROWSE BY</h3>
        <div className={styles['filter-select']}>
          <div>
            {selectedGenre ? selectedGenre.name : 'GENRE'}
            <ChevronDownIcon />
          </div>
          <ul>
            {genres.map((genre) => (
              <li key={genre.id}>
                <button onClick={() => setSelectedGenre(genre)}>{genre.name}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}