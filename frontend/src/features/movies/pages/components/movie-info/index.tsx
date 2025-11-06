import type { Movie } from "@/types/movie/movie"

import styles from "./styles.module.scss"
import { formatMovieDuration } from "@/utils/formatMovieDuration"
import { formatCurrency } from "@/utils/formatCurrency"

type MovieInfoProps = {
  movie: Movie
}

export const MovieInfo = ({ movie }: MovieInfoProps) => {
  const [releaseYear] = movie.release_date.split("-")
  const formattedReleaseDate = movie.release_date.split("-").reverse().join("/")
  const genresString = movie.genres.map(genre => genre.name).join(", ")

  return (
    <div className={styles.wrapper}>
      <div>
        <div>
          <h1>
            {movie.title}
            <p>{releaseYear}</p>
          </h1>
        </div>
        <div>
          <p>{formattedReleaseDate}</p>
          <span />
          <p>{genresString}</p>
          <span />
          <p>{formatMovieDuration(movie.runtime)}</p>
        </div>
      </div>
      <p>{movie.overview}</p>
      <ul className={styles['extra-info']}>
        <li>
          <strong>Título original</strong>
          <p>{movie.original_title}</p>
        </li>
        {!!movie.budget && !!movie.revenue && (
          <>
            <li>
              <strong>Orçamento</strong>
              <p>{formatCurrency(movie.budget)}</p>
            </li>
            <li>
              <strong>Receita</strong>
              <p>{formatCurrency(movie.revenue)}</p>
            </li>
          </>
        )}
      </ul>
    </div>
  )
}