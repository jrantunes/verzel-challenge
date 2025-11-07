import type { Genre } from "@/types/movie/genre"
import type { Cast, Movie } from "@/types/movie/movie"

export type GetDiscoverMoviesParams = {
  page?: number
  genreId?: number
}

export type GetMoviesSearchParams = {
  q?: string
}

export type GetGenresResponse = {
  genres: Genre[]
}

export type GetDiscoverMoviesResponse = {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

export type GetMovieCastingResponse = {
  id: number
  cast: Cast[]
}