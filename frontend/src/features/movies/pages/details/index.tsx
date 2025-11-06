import { useParams } from "react-router"

import { useState } from "react"
import { useMovieDetails } from "@/state/hooks/useMovieDetails"
import { useFavorites } from "@/state/hooks/useFavorites"

import Banner from "@/components/ui/banner"
import { MovieCard } from "@/components"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { FavoriteButton } from "@/components/ui/favorite-button"
import { MovieInfo } from "../components/movie-info"

import styles from "./styles.module.scss"

export const DetailsPage = () => {
  const [loadingAction, setLoadingAction] = useState(false)
  const { id } = useParams<{ id: string }>()
  const { data: movie, loading } = useMovieDetails(id || "")
  const { addFavorite, removeFavorite, isFavorite } = useFavorites()

  const isMovieFavorite = isFavorite(movie?.id)

  const handleToggleFavorite = async () => {
    setLoadingAction(true)
    if (isMovieFavorite) {
      await removeFavorite(movie?.id)
      setLoadingAction(false)
      return
    }
    await addFavorite(movie)
    setLoadingAction(false)
  };

  return loading ? (
    <div className={styles['loading-wrapper']}>
      <LoadingSpinner />
    </div>
  ) : (
    <div>
      {movie ? (
        <>
          <Banner bannerImgId={movie?.backdrop_path} />
          <div className={styles.wrapper}>
            <div>
              <MovieCard movie={movie} viewOnly />
              <FavoriteButton 
                disabled={loadingAction}
                isFavorite={isMovieFavorite} 
                handleClick={handleToggleFavorite} 
              />
            </div>
            <MovieInfo movie={movie} />
          </div>
        </>
      ) : (
        <div className={styles['empty-wrapper']}>
          <p className={styles['empty-movies']}>Movie not found!</p>
        </div>
      )}
    </div>
  )
}