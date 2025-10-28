import { Request, Response } from "express"
import { generateShareLink } from "../utils/generate-share-link"
import { prisma } from "../lib/prisma"
import { addFavoriteSchema, removeFavoriteSchema } from "../validators/favorite-validator"

export const addFavorite = async (req: Request, res: Response) => {
  try {
    const parsed = addFavoriteSchema.safeParse(req.body)
    if (!parsed.success) return res.status(400).json(parsed.error.issues)
    const { movieId, title, posterPath, rating } = parsed.data
    const sessionId = (req.headers["x-session-id"] as string)
    if (!sessionId) return res.status(400).json({ error: "sessionId é obrigatório (header x-session-id ou body)" })
    if (!movieId || !title) return res.status(400).json({ error: "movieId e title são obrigatórios" })
    let favoritesList = await prisma.favoriteList.findUnique({ where: { sessionId } })
    if (!favoritesList) {
      favoritesList = await prisma.favoriteList.create({ data: { sessionId } })
    }
    const alreadyFavoriteMovie = await prisma.favorite.findFirst({
      where: { movieId, listId: favoritesList.id },
    })
    if (alreadyFavoriteMovie) return res.status(400).json({ error: "Filme já favoritado" })
    const favorite = await prisma.favorite.create({
      data: {
        movieId,
        title,
        posterPath,
        rating: rating ?? null,
        listId: favoritesList.id,
      },
    })
    res.status(201).json(favorite)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Erro ao adicionar favorito" })
  }
}

export const getFavoritesBySession = async (req: Request, res: Response) => {
  try {
    const sessionId = (req.headers["x-session-id"] as string) || req.body.sessionId
    const favoritesList = await prisma.favoriteList.findUnique({
      where: { sessionId },
      include: { favorites: true },
    })
    if (!favoritesList) return res.json({ favorites: [] })
    res.json({ favorites: favoritesList.favorites })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Erro ao buscar favoritos" })
  }
}

export const removeFavorite = async (req: Request, res: Response) => {
  try {
    const sessionId = (req.headers["x-session-id"] as string)
    if (!sessionId) return res.status(400).json({ error: "sessionId é obrigatório!" })
    const parsed = removeFavoriteSchema.safeParse(req.params)
    if (!parsed.success) return res.status(400).json(parsed.error.issues)
    const { movieId } = parsed.data
    if (!sessionId || !movieId) return res.status(400).json({ error: "movieId é obrigatório" })
    const favoritesList = await prisma.favoriteList.findUnique({ where: { sessionId } })
    if (!favoritesList) return res.status(404).json({ error: "Lista de favoritos não encontrada" })
    const deleted = await prisma.favorite.deleteMany({ where: { listId: favoritesList.id, movieId: Number(movieId) } })
    if (deleted.count === 0) {
      return res.status(404).json({ error: "Filme não encontrado na lista de favoritos" })
    }
    res.json({ message: "Filme removido dos favoritos com sucesso" })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Erro ao remover favorito" })
  }
}

export const generateShare = async (req: Request, res: Response) => {
  try {
    const sessionId = (req.headers["x-session-id"] as string)
    if (!sessionId) return res.status(400).json({ error: "sessionId é obrigatório" })
    const favoritesList = await prisma.favoriteList.findUnique({ where: { sessionId } })
    if (!favoritesList) return res.status(404).json({ error: "Lista de favoritos não encontrada" })
    const shareLink = generateShareLink(favoritesList.uuid)
    res.json({ shareLink })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Erro ao gerar link de compartilhamento" })
  }
}

export const getSharedFavoritesByListId = async (req: Request, res: Response) => {
  try {
    const { uuid } = req.params
    const favoritesList = await prisma.favoriteList.findUnique({ where: { uuid }, include: { favorites: true } })
    if (!favoritesList) return res.status(404).json({ error: "Lista de favoritos não encontrada" })
    res.json({ favorites: favoritesList.favorites })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Erro ao buscar lista de favoritos compartilhada" })
  }
}