import { MovieCard } from "@/components"
import { useDiscoverMoviesList } from "@/state/hooks/useDiscoverMoviesList"

import styles from "./styles.module.scss"
import type { GetDiscoverMoviesResponse } from "@/services/movie.types"

export const DiscoverList = () => {
  const discoverMovies = useDiscoverMoviesList() as GetDiscoverMoviesResponse
  
  return (
    discoverMovies.results?.length === 0 ? (
      <p className={styles['empty-movies']}>No movies found!</p>
    ) : (
      <ul className={styles.wrapper}>
        {discoverMovies.results?.map(movie => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    )
  ) 
}