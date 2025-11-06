import type { Genre } from "@/types/movie/genre"
import type { Cast, Movie } from "@/types/movie/movie"

export type MoviesFilter = {
  genre?: Genre
  search?: string
  page?: number
}

export type MovieDetails = Movie & {
  cast: Cast[]
}