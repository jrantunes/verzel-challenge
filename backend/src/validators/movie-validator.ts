import { z } from "zod"

export const getDiscoverSchema = z.object({
  page: z.coerce.number("O parâmetro page deve ser numérico!").default(1),
  genreId: z.coerce.number("O parâmetro genreId deve ser numérico!").optional()
})

export const searchSchema = z.object({
  q: z.string("O parâmetro query(q) é obrigatório!"),
})

export const getByIdSchema = z.object({
  id: z.coerce.number("movieId é obrigatório e deve ser numérico!"),
})