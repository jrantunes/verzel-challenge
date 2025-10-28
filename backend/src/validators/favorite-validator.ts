import { z } from "zod"

export const addFavoriteSchema = z.object({
  movieId: z.number("movieId é obrigatório e deve ser numérico!"),
  title: z.string("title é obrigatório!"),
  posterPath: z.string().optional(),
  rating: z.number("rating é obrigatório e deve ser numérico!"),
})

export const removeFavoriteSchema = z.object({
  movieId: z.coerce.number("movieId é obrigatório e deve ser numérico!"),
})