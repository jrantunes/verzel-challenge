import type { Movie } from "@/types/movie/movie"

import styles from "./styles.module.scss"

type MovieHorizontalCardProps = {
  movie: Partial<Movie>
}

export const MovieHorizontalCard = ({ movie }: MovieHorizontalCardProps) => {
  return (
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
        <strong>{movie.title}</strong>
      </div>
    </div>
  )
}