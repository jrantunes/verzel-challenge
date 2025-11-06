import { Link } from "react-router"
import { useFavorites } from "@/state/hooks/useFavorites"
import { useState, type MouseEvent } from "react"
import type { Movie } from "@/types/movie/movie"

import { FavoriteButton } from "@/components/ui/favorite-button"
import { Rating } from "../rating"
import styles from "./styles.module.scss"

type MovieHorizontalCardProps = {
  movie: Partial<Movie>
  hideFavoriteButton?: boolean
}

export const MovieHorizontalCard = ({ movie, hideFavoriteButton = false }: MovieHorizontalCardProps) => {
  const [loadingAction, setLoadingAction] = useState(false)
  const { removeFavorite } = useFavorites()
  
  const [releaseYear] = movie.release_date!.split("-")
  const rating =  Math.round((movie.vote_average! / 2) * 100) / 100
  const overview = movie.overview!.length <= 560 ? movie.overview : movie.overview!.slice(0, 560).trimEnd() + "..."

  const handleRemoveFavorite = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setLoadingAction(true)
    await removeFavorite(movie.id)
    setLoadingAction(false)
  }

  return (
    <Link to={`/movie/${movie.id}`}>
      <div className={styles.wrapper}>
        <div>
          <img  
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}.jpg`}
            alt={movie.title} 
            loading="lazy"
            decoding="async"
            srcSet={`
              https://image.tmdb.org/t/p/w200/${movie.poster_path}.jpg 200w,
              https://image.tmdb.org/t/p/w300/${movie.poster_path}.jpg 300w,
              https://image.tmdb.org/t/p/w500/${movie.poster_path}.jpg 500w,
              https://image.tmdb.org/t/p/original/${movie.poster_path}.jpg 1000w
            `}
            fetchPriority="low"
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <div>
            <strong>
              {movie.title}
              <span>{releaseYear}</span>
            </strong>
            <div className={styles.rating}>
              <Rating rating={rating} />
              <p>
                {rating}
              </p>
            </div>
          </div>
          <p>{overview}</p>
          {!hideFavoriteButton && (
            <FavoriteButton 
              disabled={loadingAction}
              isFavorite 
              handleClick={handleRemoveFavorite} 
            />
          )}
        </div>
      </div>
    </Link>
  )
}