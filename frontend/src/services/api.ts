import axios from "axios"
import { getOrCreateSessionId } from "@/utils/session"

const baseURL = import.meta.env.VITE_REACT_APP_API_URL

export const api = axios.create({
  baseURL
})

api.interceptors.request.use(async (config) => {
  const sessionId = getOrCreateSessionId()
  if (sessionId) {
    config.headers.set("x-session-id", sessionId)
  }
  return config
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)