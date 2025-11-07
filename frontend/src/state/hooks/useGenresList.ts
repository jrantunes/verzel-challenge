import { useRecoilValue } from "recoil"
import { genresAsync } from "../selectors"

export const useGenresList = () => {
  return useRecoilValue(genresAsync)
}