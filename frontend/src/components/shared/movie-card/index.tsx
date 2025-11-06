import { Link } from "react-router"

import type { Movie } from "@/types/movie/movie"

import styles from "./styles.module.scss"

type MovieCardProps = {
  movie: Movie
  viewOnly?: boolean
}

export const MovieCard = ({ movie, viewOnly = false }: MovieCardProps) => {
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
            <span className={styles.overlay}></span>
          </Link>
        </>
      ) : (
        <span className={styles['view-only-overlay']}></span>
      )}
    </div>
  )
}