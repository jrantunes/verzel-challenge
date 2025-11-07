import { atom, DefaultValue } from "recoil"

import type { MoviesFilter } from "./types"
import type { Favorite } from "@/types/favorite/favorite"
import { favoriteService } from "@/services"

export const FAVORITES_STORAGE_KEY = "app:favorites"

const loadFavoritesFromStorage = (): Favorite[] | undefined => {
  try {
    const stored = localStorage.getItem(FAVORITES_STORAGE_KEY)
    return stored ? JSON.parse(stored) : undefined
  } catch {
    return []
  }
}

export const favoritesListState = atom<Favorite[]>({
  key: "favoritesListState",
  default: [],
  effects: [
    ({ setSelf, onSet }) => {
      const saved = loadFavoritesFromStorage()
      if (saved) {
        setSelf(saved)
      } else {
        (async () => {
          try {
            const { data } = await favoriteService.getFavorites()
            setSelf(data.favorites)
            localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(data.favorites))
          } catch {
            setSelf([])
          }
        })()
      }
      onSet((newValue) => {
        if (newValue instanceof DefaultValue) return
        localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(newValue))
      })
    },
  ],
})

export const moviesFilter = atom<MoviesFilter>({
  key: 'moviesFilter',
  default: {
    search: '',
    page: 1
  }
})