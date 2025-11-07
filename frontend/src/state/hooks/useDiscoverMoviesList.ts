import { useRecoilValue, useRecoilValueLoadable } from "recoil"
import { discoverMoviesAsync } from "../selectors"
import { moviesFilter } from "../atom"

export const useDiscoverMoviesList = () => {
  const filter = useRecoilValue(moviesFilter)
  const loadable = useRecoilValueLoadable(discoverMoviesAsync(filter))
  switch (loadable.state) {
    case "loading":
      return { data: null, loading: true, error: false }
    case "hasError":
      return { data: null, loading: false, error: true }
    case "hasValue":
    default:
      return { data: loadable.contents, loading: false, error: false }
  }
}