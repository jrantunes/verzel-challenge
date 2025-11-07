import { MovieCard } from "@/components"
import { useDiscoverMoviesList } from "@/state/hooks/useDiscoverMoviesList"

import { LoadingSpinner } from "@/components/ui/loading-spinner"

import styles from "./styles.module.scss"
import { useRecoilValue } from "recoil"
import { moviesFilter } from "@/state/atom"
import { MovieHorizontalCard } from "@/components/shared/movie-horizontal-card"

export const DiscoverList = () => {
  const { data: discoverMovies, loading } = useDiscoverMoviesList()
  const filter = useRecoilValue(moviesFilter)
  
  return (
    loading ? (
      <div className={styles['loading-wrapper']}>
        <LoadingSpinner />
      </div>
    ) : discoverMovies?.results?.length === 0 ? (
      <p className={styles['empty-movies']}>No movies found!</p>
    ) : filter.search ? (
      <ul className={styles['horizontal-wrapper']}>
        {discoverMovies?.results?.map(movie => (
          <li key={movie.id}>
            <MovieHorizontalCard movie={movie} />
          </li>
        ))}
      </ul>
    ) : (
      <ul className={styles['grid-wrapper']}>
        {discoverMovies?.results?.map(movie => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    )
  ) 
}