import { movieService } from "@/services";
import { selector } from "recoil";

export const genresAsync = selector({
  key: 'genresAsync',
  get: async () => {
    try {
      const response = await movieService.getGenres()
      const { genres } = response.data
      return genres
    } catch {
      return []
    }
  }
})