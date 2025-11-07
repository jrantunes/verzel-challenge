import { useFavorites } from "@/state/hooks/useFavorites"
import { useState } from "react"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { MovieHorizontalCard } from "@/components/shared/movie-horizontal-card"
import { ShareFavoritesButton } from "../components/share-favorites-button"
import styles from "./styles.module.scss"
import { useNavigate } from "react-router"

export const FavoritesListPage = () => {
  const [loadingAction, setLoadingAction] = useState(false)
  const { loading, data: favorites, shareFavorites } = useFavorites()

  const navigate = useNavigate() 

  const handleShareFavorites = async () => {
    setLoadingAction(true)
    const data = await shareFavorites()
    if (data) {
      const { shareId } = data
      navigate(`/favorites/${shareId}`)
    }
    setLoadingAction(false)
  }

  return (
    <div className={styles.wrapper}>
      <div>
        <h1>Meus favoritos</h1>
        {!loading && favorites.length > 0 && (
          <ShareFavoritesButton disabled={loadingAction} handleClick={handleShareFavorites} />
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