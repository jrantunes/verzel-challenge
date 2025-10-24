export const generateShareLink = (uuid: string) => {
  const baseURL = process.env.API_BASE_URL || `http://localhost:3000`
  return `${baseURL}/api/favorites/share/${uuid}`
}