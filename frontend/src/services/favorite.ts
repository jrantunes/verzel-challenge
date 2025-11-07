import { api } from "./api"
import type { CreateShareLinkResponse, FavoritePayload, GetFavoritesResponse } from "./favorite.types"

export const favoriteService = {
  getFavorites: () => api.get<GetFavoritesResponse>("/favorites"),
  getSharedFavoritesListById: (sharedListId: string) => api.get<GetFavoritesResponse>(`/favorites/share/${sharedListId}`),
  createFavorites: (payload: FavoritePayload) => api.post("/favorites", payload),
  createShareLink: () => api.post<CreateShareLinkResponse>("/favorites/share"),
  deleteFavoriteById: (movieId: number) => api.delete(`/favorites/${movieId}`)
}