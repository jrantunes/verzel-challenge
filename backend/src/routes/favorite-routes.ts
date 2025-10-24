import express from "express"
import {
  addFavorite,
  getFavoritesBySession,
  removeFavorite,
  generateShare,
  getSharedFavoritesByListId,
} from "../controllers/favorite-controller"

const router = express.Router()

router.post("/", addFavorite)
router.get("/", getFavoritesBySession)
router.delete("/:movieId", removeFavorite)
router.post("/share", generateShare)
router.get("/share/:uuid", getSharedFavoritesByListId)

export default router