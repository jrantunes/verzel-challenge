import { useInitFavorites } from "./hooks/useInitFavorites"

export function FavoritesInitializer() {
  useInitFavorites()
  return null
}