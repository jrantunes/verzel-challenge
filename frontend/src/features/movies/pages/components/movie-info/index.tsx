import type { MovieDetails } from "@/state/types"

import { formatMovieDuration } from "@/utils/formatMovieDuration"
import { formatCurrency } from "@/utils/formatCurrency"

import styles from "./styles.module.scss"
import { CastList } from "../cast-list"
import { Rating } from "@/components/shared/rating"

type MovieInfoProps = {
  movie: MovieDetails
}

export const MovieInfo = ({ movie }: MovieInfoProps) => {
  const [releaseYear] = movie.release_date.split("-")
  const formattedReleaseDate = movie.release_date.split("-").reverse().join("/")
  const genresString = movie.genres.map(genre => genre.name).join(", ")
  const rating =  Math.round((movie.vote_average / 2) * 100) / 100

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
          <span />
          <Rating rating={rating} />
          <p>{rating}</p>
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
      <CastList cast={movie.cast} />
    </div>
  )
}