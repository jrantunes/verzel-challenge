import { useRecoilValueLoadable } from "recoil"
import { discoverMoviesAsync } from "../selectors"

export const useDiscoverMoviesList = () => {
  const loadable = useRecoilValueLoadable(discoverMoviesAsync)
  if (loadable.state === "loading") return []
  if (loadable.state === "hasError") return []
  return loadable.contents
}