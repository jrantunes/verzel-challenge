import axios from 'axios'

const apiKey = process.env.TMDB_API_KEY
const baseURL = process.env.TMDB_BASE_URL

const api = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: `Bearer ${apiKey}`
  }
})

export default api