import type { Movie } from "@/types/movie/movie"
import { api } from "./api"

import type {
  GetDiscoverMoviesParams,
  GetDiscoverMoviesResponse,
  GetGenresResponse,
  GetMovieCastingResponse,
  GetMoviesSearchParams
} from "./movie.types"

export const movieService = {
  getDiscoverMovies: (params: GetDiscoverMoviesParams = {}) => 
    api.get<GetDiscoverMoviesResponse>("/movies/discover", { params }),
  getGenres: () => api.get<GetGenresResponse>("/movies/genres"),
  getTrending: () => api.get("/movies/trending"),
  getMoviesSearch: (params: GetMoviesSearchParams = {}) => 
    api.get("/movies/search", { params }),
  getMovieDetails: (movieId: string) => api.get<Movie>(`/movies/details/${movieId}`),
  getMovieCasting: (movieId: string) => api.get<GetMovieCastingResponse>(`/movies/${movieId}/casting`),
}