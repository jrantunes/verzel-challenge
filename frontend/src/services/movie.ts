import { api } from "./api"

import type { GetDiscoverMoviesParams, GetMoviesSearchParams } from "./movie.types"
import type { Genre } from "@/types/movie/genre"

export const movieService = {
  getDiscoverMovies: (params: GetDiscoverMoviesParams = {}) => api.get("/movies/discover", { params }),
  getGenres: () => api.get<{ genres: Genre[] }>("/movies/genres"),
  getTrending: () => api.get("/movies/trending"),
  getMoviesSearch: (params: GetMoviesSearchParams = {}) => api.get("/movies/search", { params }),
  getMovieDetails: (movieId: string) => api.get(`/movies/details/${movieId}`),
}