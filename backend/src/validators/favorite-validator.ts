import { z } from "zod"

export const addFavoriteSchema = z.object({
  movieId: z.number(),
  title: z.string(),
  posterPath: z.string(),
  rating: z.number(),
})

export const removeFavoriteSchema = z.object({
  movieId: z.coerce.number(),
  sessionId: z.string().optional(),
})

export const generateShareSchema = z.object({
  sessionId: z.string().optional(),
})