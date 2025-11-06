import { useParams } from "react-router"

import { useMovieDetails } from "@/state/hooks/useMovieDetails"

import Banner from "@/components/ui/banner"
import { MovieCard } from "@/components"
import { LoadingSpinner } from "@/components/ui/loading-spinner"

import styles from "./styles.module.scss"
import { MovieInfo } from "../components/movie-info"

export const DetailsPage = () => {
  const { id } = useParams<{ id: string }>()
  const { data: movie, loading } = useMovieDetails(id || "")

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