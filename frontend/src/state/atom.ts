import { atom } from "recoil";

import type { MoviesFilter } from "./types";

export const moviesFilter = atom<MoviesFilter>({
  key: 'moviesFilter',
  default: {
    search: '',
    page: 1
  }
})