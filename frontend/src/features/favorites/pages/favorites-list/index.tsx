import { useFavorites } from "@/state/hooks/useFavorites"
import styles from "./styles.module.scss"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { MovieHorizontalCard } from "@/components/shared/movie-horizontal-card"
import { ShareFavoritesButton } from "../components/share-favorites-button"

export const FavoritesListPage = () => {
  const { loading, data: favorites } = useFavorites()

  return (
    <div className={styles.wrapper}>
      <div>
        <h1>Meus favoritos</h1>
        {!loading && favorites.length > 0 && (
          <ShareFavoritesButton />
        )}
      </div>
      {loading ? (
        <div className={styles['loading-wrapper']}>
          <LoadingSpinner />
        </div>
      ) : !Array.isArray(favorites) || favorites.length === 0 ? (
        <p className={styles['empty-movies']}>No movies found!</p>
      ) : (
        <ul>
          {favorites?.map(favorite => (
            <li key={favorite.id}>
              <MovieHorizontalCard 
                movie={{
                  title: favorite.title,
                  id: favorite.movieId,
                  vote_average: favorite.rating,
                  poster_path: favorite.posterPath,
                  overview: favorite.overview,
                  release_date: favorite.releaseDate
                }}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}