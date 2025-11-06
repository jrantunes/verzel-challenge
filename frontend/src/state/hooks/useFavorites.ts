import { useRecoilState, useRecoilValueLoadable } from "recoil"
import { favoritesListState } from "../atom"
import { favoritesAsync } from "@/state/selectors"
import { favoriteService } from "@/services"

import type { MovieDetails } from "../types"
import type { FavoritePayload } from "@/services/favorite.types"

export const useFavorites = () => {
  const loadable = useRecoilValueLoadable(favoritesAsync)
  const [favorites, setFavorites] = useRecoilState(favoritesListState)

  const isFavorite = (id?: number) => {
    if (!id) return false
    return !!favorites.some((m) => String(m.movieId) === String(id))
  }

  const addFavorite = async (movie?: MovieDetails | null) => {
    if (!movie) return
    try {
      const payload: FavoritePayload = {
        movieId: movie.id,
        rating: movie.vote_average,
        title: movie.title,
        posterPath: movie.poster_path,
        overview: movie.overview,
        releaseDate: movie.release_date
      }
      const response = await favoriteService.createFavorites(payload)
      setFavorites((prev) => [...prev, response.data])
    } catch (e) {
      console.error("Error adding favorite:", e)
    }
  }

  const removeFavorite = async (id?: number) => {
    if (!id) return
    try {
      await favoriteService.deleteFavoriteById(id)
      setFavorites((prev) => prev.filter((m) => String(m.movieId) !== String(id)))
    } catch (e) {
      console.error("Error removing favorite:", e)
    }
  }

  const shareFavorites = async () => {
    try {
      const response = await favoriteService.createShareLink()
      return response.data
    } catch (e) {
      console.error("Error removing favorite:", e)
    }
  }

  return {
    data:
      loadable.state === "hasValue" ? favorites : [],
    loading: loadable.state === "loading",
    error: loadable.state === "hasError",
    isFavorite,
    addFavorite,
    removeFavorite,
    shareFavorites
  }
}