import cors from "cors"
import express from "express"
import movieRoutes from "./routes/movie-routes"

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/movies", movieRoutes);

export default app