import { movieService } from "@/services";
import { selector } from "recoil";
import { moviesFilter } from "../atom";

import type { GetDiscoverMoviesResponse } from "@/services/movie.types";
import type { Genre } from "@/types/movie/genre";

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
    const { page } = get(moviesFilter)
    try {
      const response = await movieService.getDiscoverMovies({ page })
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