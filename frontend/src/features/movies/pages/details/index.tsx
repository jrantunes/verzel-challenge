import { useParams } from "react-router"

import { useMovieDetails } from "@/state/hooks/useMovieDetails"
import { useFavorites } from "@/state/hooks/useFavorites"

import Banner from "@/components/ui/banner"
import { MovieCard } from "@/components"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { MovieInfo } from "../components/movie-info"
import { FavoriteButton } from "../components/favorite-button"

import styles from "./styles.module.scss"

export const DetailsPage = () => {
  const { id } = useParams<{ id: string }>()
  const { data: movie, loading } = useMovieDetails(id || "")
  const { addFavorite, removeFavorite, isFavorite } = useFavorites()

  const isMovieFavorite = isFavorite(movie?.id)

  const handleToggleFavorite = () => {
    if (isMovieFavorite) {
      removeFavorite(movie?.id)
      return
    }
    addFavorite(movie)
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