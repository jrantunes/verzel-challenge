import { useEffect, useState } from "react"
import { useFavorites } from "@/state/hooks/useFavorites"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { MovieHorizontalCard } from "@/components/shared/movie-horizontal-card"
import { ShareFavoritesButton } from "../components/share-favorites-button"
import { useParams } from "react-router"
import type { Favorite } from "@/types/favorite/favorite"
import styles from "./styles.module.scss"

export const SharedFavoritesListPage = () => {
  const [loading, setLoading] = useState(true)
  const [isLinkCopied, setIsLinkCopied] = useState(false)
  const [favorites, setFavorites] = useState<Favorite[]>()
  const { getSharedFavorites } = useFavorites()
  const { id } = useParams<{ id: string }>()

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setIsLinkCopied(true)
  }

  useEffect(() => {
    if (!id) return
    (async () => {
      setLoading(true)
      const favorites = await getSharedFavorites(id)
      setFavorites(favorites)
      setLoading(false)
    })()
  }, [id])

  return (
    <div className={styles.wrapper}>
      <div>
        <h1>Favoritos compartilhados</h1>
        {!loading && favorites && favorites.length > 0 && (
          <ShareFavoritesButton 
            handleClick={handleCopyLink} 
            disabled={isLinkCopied}
            label={isLinkCopied ? "Link copiado" : "Copiar link de compartilhamento"} 
          />
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
                hideFavoriteButton
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