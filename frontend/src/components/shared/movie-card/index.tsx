import { Link } from "react-router"
import { useFavorites } from "@/state/hooks/useFavorites"

import type { Movie } from "@/types/movie/movie"

import styles from "./styles.module.scss"

type MovieCardProps = {
  movie: Movie
  viewOnly?: boolean
}

export const MovieCard = ({ movie, viewOnly = false }: MovieCardProps) => {
  const { isFavorite } = useFavorites()
  
  const isMovieFavorite = isFavorite(movie.id)

  return (
    <div className={`${styles.wrapper} ${viewOnly ? 'view-only' : ''}`}>
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
        // width="230"
        // height="345"
        referrerPolicy="no-referrer"
      />
      {!viewOnly ? (
        <>
          <span className={styles['movie-title']}>{movie.title}</span>
          <Link to={`/movie/${movie.id}`}>
            <span className={styles.overlay}>
              {isMovieFavorite && (
                <svg className={styles.star} viewBox="0 0 24 24">
                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.876 
                          1.48 8.318L12 18.896l-7.416 4.604 
                          1.48-8.318L0 9.306l8.332-1.151z" />
                </svg>
              )}
            </span>
          </Link>
        </>
      ) : (
        <span className={styles['view-only-overlay']}></span>
      )}
    </div>
  )
}