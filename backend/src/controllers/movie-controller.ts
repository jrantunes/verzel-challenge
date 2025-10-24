import { Request, Response } from "express"
import {
  getDiscoverMoviesWithPagination,
  getGenres,
  getTrendingMoviesByWeek,
  searchMovies,
  getMovieDetails
} from "../services/tmdb-service"
import { getByIdSchema, getDiscoverSchema, searchSchema } from "../validators/movie-validator"

export const getDiscoverMovies = async (req: Request, res: Response) => {
  try {
    const parsed = getDiscoverSchema.safeParse(req.query)
    if (!parsed.success) return res.status(400).json(parsed.error.issues)
    const discoverMovies = await getDiscoverMoviesWithPagination(parsed.data.page)
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
    const parsed = searchSchema.safeParse(req.query)
    if (!parsed.success) return res.status(400).json(parsed.error.issues)
    const movies = await searchMovies(parsed.data.q)
    res.json(movies)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Erro ao buscar filmes" })
  }
}

export const getMovieById = async (req: Request, res: Response) => {
  try {
    const parsed = getByIdSchema.safeParse(req.params)
    if (!parsed.success) return res.status(400).json(parsed.error.issues)
    const movie = await getMovieDetails(parsed.data.id)
    res.json(movie)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Erro ao buscar detalhes" })
  }
}