import { atom, DefaultValue } from "recoil"

import type { MoviesFilter } from "./types"
import type { Favorite } from "@/types/favorite/favorite"

const FAVORITES_STORAGE_KEY = "app:favorites"

const loadFavoritesFromStorage = (): Favorite[] => {
  try {
    const stored = localStorage.getItem(FAVORITES_STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

export const favoritesListState = atom<Favorite[]>({
  key: 'favoritesListState',
  default: loadFavoritesFromStorage(),
  effects: [
    ({ onSet }) => {
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