import api from "../lib/api"

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
  });
  return res.data
}

export const getMovieDetails = async (id: string) => {
  const res = await api.get(`/movie/${id}?language=pt-BR`)
  return res.data
}