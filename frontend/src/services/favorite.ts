import { api } from "./api"
import type { FavoritePayload } from "./favorite.types"

export const favoriteService = {
  getFavorites: () => api.get("/favorites"),
  getSharedFavoritesListById: (sharedListId: string) => api.get(`/favorites/share/${sharedListId}`),
  createFavorites: (payload: FavoritePayload) => api.post("/favorites", payload),
  createShareLink: () => api.post("/favorites/share"),
  deleteFavoriteById: (movieId: string) => api.delete(`/favorites/${movieId}`)
}