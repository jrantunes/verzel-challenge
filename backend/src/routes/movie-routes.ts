import express from "express"
import {
  getDiscoverMovies,
  getAllGenres,
  getTrendingMovies,
  getMovies,
  getMovieById,
  getMovieCastingByMovieId
} from "../controllers/movie-controller"

const router = express.Router()

router.get("/discover", getDiscoverMovies)
router.get("/genres", getAllGenres)
router.get("/trending", getTrendingMovies)
router.get("/search", getMovies)
router.get("/details/:id", getMovieById)
router.get("/:id/casting", getMovieCastingByMovieId)

export default router