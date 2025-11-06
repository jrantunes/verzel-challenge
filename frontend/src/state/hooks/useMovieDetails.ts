import { useRecoilValueLoadable } from "recoil"
import { movieDetailsAsync } from "../selectors"

export const useMovieDetails = (id: string) => {
  const loadable = useRecoilValueLoadable(movieDetailsAsync(id))
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