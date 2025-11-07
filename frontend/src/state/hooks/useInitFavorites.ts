import { useEffect } from "react"
import { useSetRecoilState } from "recoil"
import { FAVORITES_STORAGE_KEY, favoritesListState } from "../atom"
import { favoriteService } from "@/services"

export const useInitFavorites = () => {
  const setFavorites = useSetRecoilState(favoritesListState)

  useEffect(() => {
    const cached = localStorage.getItem(FAVORITES_STORAGE_KEY)
    if (cached) {
      setFavorites(JSON.parse(cached))
      return
    }
    (async () => {
      try {
        const { data } = await favoriteService.getFavorites()
        setFavorites(data.favorites)
        localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(data.favorites))
      } catch (e) {
        console.error("Erro ao carregar favoritos:", e)
      }
    })()
  }, [setFavorites])
}