import type { Favorite } from "@/types/favorite/favorite"

export type FavoritePayload = {
  movieId: number
  title: string
  posterPath?: string
  rating: number
  overview: string
  releaseDate: string
}

export type GetFavoritesResponse = {
  favorites: Favorite[]
}

export type CreateShareLinkResponse = {
  shareId: string
}