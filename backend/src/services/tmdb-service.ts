import api from "../lib/api"

export const getDiscoverMoviesWithPagination = async (page: number, genreId?: number) => {
  const res = await api.get(`/discover/movie`, {
    params: {
      language: "pt-BR",
      page,
      ...(genreId ? {
        "with_genres": genreId
      } : {})
    }
  })
  return res.data
}

export const getTrendingMoviesByWeek = async () => {
  const res = await api.get(`/trending/movie/week?language=pt-BR`)
  return res.data
}

export const getGenres = async () => {
  const res = await api.get(`/genre/movie/list?language=pt-BR`)
  return res.data
}

export const searchMovies = async (query: string) => {
  const res = await api.get(`/search/movie?language=pt-BR`, {
    params: { query },
  })
  return res.data
}

export const getMovieDetails = async (id: number) => {
  const res = await api.get(`/movie/${id}?language=pt-BR`)
  return res.data
}

export const getMovieCasting = async (id: number) => {
  const res = await api.get(`/movie/${id}/credits`)
  return {
    id: res.data.id,
    cast: res.data.cast
  }
}