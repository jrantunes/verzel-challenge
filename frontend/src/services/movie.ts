import { api } from "./api"
import type { GetDiscoverMoviesParams, GetMoviesSearchParams } from "./movie.types"

export const movieService = {
  getDiscoverMovies: (params: GetDiscoverMoviesParams = {}) => api.get("/movies/discover", { params }),
  getGenres: () => api.get("/movies/genres"),
  getTrending: () => api.get("/movies/trending"),
  getMoviesSearch: (params: GetMoviesSearchParams = {}) => api.get("/movies/search", { params }),
  getMovieDetails: (movieId: string) => api.get(`/movies/details/${movieId}`),
}