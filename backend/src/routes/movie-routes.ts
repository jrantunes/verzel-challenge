import express from "express"
import {
  getDiscoverMovies,
  getAllGenres,
  getTrendingMovies,
  getMovies,
  getMovieById
} from "../controllers/movie-controller"

const router = express.Router()

router.get("/discover", getDiscoverMovies)
router.get("/genres", getAllGenres)
router.get("/trending", getTrendingMovies)
router.get("/search", getMovies)
router.get("/details/:id", getMovieById)

export default router