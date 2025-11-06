import { api } from "./api"
import type { FavoritePayload, GetFavoritesResponse } from "./favorite.types"

export const favoriteService = {
  getFavorites: () => api.get<GetFavoritesResponse>("/favorites"),
  getSharedFavoritesListById: (sharedListId: string) => api.get(`/favorites/share/${sharedListId}`),
  createFavorites: (payload: FavoritePayload) => api.post("/favorites", payload),
  createShareLink: () => api.post("/favorites/share"),
  deleteFavoriteById: (movieId: number) => api.delete(`/favorites/${movieId}`)
}