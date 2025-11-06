export function formatMovieDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60
  return hours === 0 ? `${remainingMinutes}m` : `${hours}h ${remainingMinutes}m`
}