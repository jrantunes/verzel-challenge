import { movieService } from "@/services";
import { selector, selectorFamily } from "recoil";
import { moviesFilter } from "../atom";

import type { GetDiscoverMoviesResponse } from "@/services/movie.types";
import type { Genre } from "@/types/movie/genre";
import type { MovieDetails } from "../types";

export const genresAsync = selector<Genre[]>({
  key: 'genresAsync',
  get: async () => {
    try {
      const response = await movieService.getGenres()
      const { genres } = response.data
      return genres
    } catch {
      return []
    }
  }
})

export const discoverMoviesAsync = selector<GetDiscoverMoviesResponse>({
  key: 'discoverMoviesAsync',
  get: async ({ get }) => {
    const { page, genre } = get(moviesFilter)
    try {
      const response = await movieService.getDiscoverMovies({ page, genreId: genre?.id })
      const { data } = response
      return data
    } catch {
      return {
        page: 1,
        results: [],
        total_pages: 1,
        total_results: 0,
      }
    }
  }
})

export const movieDetailsAsync = selectorFamily<MovieDetails | null, string>({
  key: 'movieDetailsAsync',
  get: (id: string) => async () => {
    if (!id) return null
    try {
      const movieResponse = await movieService.getMovieDetails(id)
      const movieCastingResponse = await movieService.getMovieCasting(id)
      return {
        ...movieResponse.data,
        cast: movieCastingResponse.data.cast
      }
    } catch {
      return null
    }
  }
})