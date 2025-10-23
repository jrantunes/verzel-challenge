import { Request, Response } from "express"
import {
  getDiscoverMoviesWithPagination,
  getGenres,
  getTrendingMoviesByWeek,
  searchMovies,
  getMovieDetails
} from "../services/tmdb-service"

export const getDiscoverMovies = async (req: Request, res: Response) => {
  try {
    const page = (req.query.page as string) || 1
    const discoverMovies = await getDiscoverMoviesWithPagination(Number(page))
    res.json(discoverMovies)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Erro ao buscar generos" })
  }
}

export const getAllGenres = async (_: Request, res: Response) => {
  try {
    const genres = await getGenres()
    res.json(genres)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Erro ao buscar generos" })
  }
}

export const getTrendingMovies = async (_: Request, res: Response) => {
  try {
    const trendingMovies = await getTrendingMoviesByWeek()
    res.json(trendingMovies)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Erro ao buscar trending" })
  }
}

export const getMovies = async (req: Request, res: Response) => {
  try {
    const q = (req.query.q as string) || ""
    const movies = await searchMovies(q)
    res.json(movies)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Erro ao buscar filmes" })
  }
}

export const getMovieById = async (req: Request, res: Response) => {
  try {
    const movie = await getMovieDetails(req.params.id)
    res.json(movie)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Erro ao buscar detalhes" })
  }
}