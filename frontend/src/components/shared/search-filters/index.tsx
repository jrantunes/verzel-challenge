import { ChevronDownIcon } from "@radix-ui/react-icons"

import { useGenresList } from "@/state/hooks/useGenresList"
import { useRecoilState } from "recoil"
import { moviesFilter } from "@/state/atom"

import type { Genre } from "@/types/movie/genre"

import styles from "./styles.module.scss"

export const SearchFilters = () => {
  const [filter, setMoviesFilter] = useRecoilState(moviesFilter)
  const genres = useGenresList()

  const selectedGenre = filter.genre

  const handleChangeGenre = (genre: Genre) => {
    setMoviesFilter({ genre })
  }

  const clearSelectedGenre = () => {
    setMoviesFilter({ genre: undefined })
  }

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
            <li>
              <button
                onClick={clearSelectedGenre}
              >
                Todos
              </button>
            </li>
            {genres.map((genre) => (
              <li key={genre.id}>
                <button 
                  onClick={() => handleChangeGenre(genre)}
                >
                  {genre.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}