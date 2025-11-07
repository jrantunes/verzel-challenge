import { z } from "zod"

export const addFavoriteSchema = z.object({
  movieId: z.number("movieId é obrigatório e deve ser numérico!"),
  title: z.string("title é obrigatório!"),
  posterPath: z.string().optional(),
  rating: z.number("rating é obrigatório e deve ser numérico!"),
  overview: z.string("overview é obrigatório!"),
  releaseDate: z.string("releaseDate é obrigatório!"),
})

export const removeFavoriteSchema = z.object({
  movieId: z.coerce.number("movieId é obrigatório e deve ser numérico!"),
})