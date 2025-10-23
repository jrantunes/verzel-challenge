export const generateShareLink = (uuid: string) => {
  const baseURL = process.env.BASE_URL || "http://localhost:3000"
  return `${baseURL}/api/favorites/share/${uuid}`
}