import type { Genre } from "@/types/movie/genre"

export type MoviesFilter = {
  genre?: Genre
  search?: string
  page?: number
}