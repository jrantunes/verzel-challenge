import { MovieCard } from "@/components"
import { useDiscoverMoviesList } from "@/state/hooks/useDiscoverMoviesList"

import { LoadingSpinner } from "@/components/ui/loading-spinner"

import styles from "./styles.module.scss"

export const DiscoverList = () => {
  const { data: discoverMovies, loading } = useDiscoverMoviesList()
  
  return (
    loading ? (
      <div className={styles['loading-wrapper']}>
        <LoadingSpinner />
      </div>
    ) : discoverMovies?.results?.length === 0 ? (
      <p className={styles['empty-movies']}>No movies found!</p>
    ) : (
      <ul className={styles.wrapper}>
        {discoverMovies?.results?.map(movie => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    )
  ) 
}