import styles from "./styles.module.scss"

type FavoriteButtonProps = {
  isFavorite: boolean
  handleClick: () => void
}

export const FavoriteButton = ({ isFavorite, handleClick }: FavoriteButtonProps) => {
  return (
    <button
      className={`${styles['favorite-button']} ${isFavorite ? styles['active-favorite-button'] : ""}`}
      onClick={handleClick}
      aria-label={isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
    >
      {isFavorite ? (
        <svg 
          className={styles['favorite-button-icon']}
          viewBox="0 0 24 24" 
        >
          <path d="M3 6h18v2H3V6zm2 3h14l-1.5 12H6.5L5 9zm5 2v8h2v-8H8zm4 0v8h2v-8h-2zM9 4V3h6v1h5v2H4V4h5z"/>
        </svg>
      ) : (
        <svg 
          className={styles['favorite-button-icon']} 
          viewBox="0 0 24 24"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
          2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 
          14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 
          3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      )}
      {isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
    </button>
  )
}