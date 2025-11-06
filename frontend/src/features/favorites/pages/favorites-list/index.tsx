import { useFavorites } from "@/state/hooks/useFavorites"
import styles from "./styles.module.scss"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { MovieHorizontalCard } from "@/components/shared/movie-horizontal-card"

export const FavoritesListPage = () => {
  const { loading, data: favorites } = useFavorites()

  return (
    <div className={styles.wrapper}>
      <h1>Meus favoritos</h1>
      {loading ? (
        <div className={styles['loading-wrapper']}>
          <LoadingSpinner />
        </div>
      ) : favorites?.length === 0 ? (
        <p className={styles['empty-movies']}>No movies found!</p>
      ) : (
        <ul className={styles.wrapper}>
          {favorites?.map(favorite => (
            <li key={favorite.id}>
              <MovieHorizontalCard 
                movie={{
                  title: favorite.title,
                  id: favorite.movieId,
                  vote_average: favorite.rating,
                  poster_path: favorite.posterPath
                }}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}