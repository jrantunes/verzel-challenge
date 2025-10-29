import { atom } from "recoil";
import { genresAsync } from "./selectors";

import type { Genre } from "@/types/movie/genre";

export const genresListState = atom<Genre[]>({
  key: 'genresListState',
  default: genresAsync
})