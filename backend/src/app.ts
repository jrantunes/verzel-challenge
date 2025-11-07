import cors from "cors"
import express from "express"
import movieRoutes from "./routes/movie-routes"
import favoriteRoutes from "./routes/favorite-routes"

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/movies", movieRoutes)
app.use("/api/favorites", favoriteRoutes)

export default app