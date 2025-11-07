import styles from "./styles.module.scss"

type RatingProps =  {
  rating: number
}

export const Rating = ({ rating }: RatingProps) => {
  const fullStars = Math.floor(rating)
  const decimal = rating - fullStars
  const emptyStars = 5 - fullStars - (decimal > 0 ? 1 : 0)

  const fillPercent = Math.round(decimal * 100)

  return (
    <div className={styles.rating}>
      {Array.from({ length: fullStars }, (_, i) => (
        <svg key={`full-${i}`} className={styles.star} viewBox="0 0 24 24">
          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.876 
                  1.48 8.318L12 18.896l-7.416 4.604 
                  1.48-8.318L0 9.306l8.332-1.151z" />
        </svg>
      ))}

      {decimal > 0 && (
        <svg key="partial" className={styles.star} viewBox="0 0 24 24">
          <defs>
            <linearGradient id="grad-partial">
              <stop offset={`${fillPercent}%`} stopColor="#ffb800" />
              <stop offset={`${fillPercent}%`} stopColor="#ddd" />
            </linearGradient>
          </defs>

          <path
            fill="url(#grad-partial)"
            d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.876 
              1.48 8.318L12 18.896l-7.416 4.604 
              1.48-8.318L0 9.306l8.332-1.151z"
          />
        </svg>
      )}

      {Array.from({ length: emptyStars }, (_, i) => (
        <svg key={`empty-${i}`} className={`${styles.star} ${styles.empty}`} viewBox="0 0 24 24">
          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.876 
                  1.48 8.318L12 18.896l-7.416 4.604 
                  1.48-8.318L0 9.306l8.332-1.151z" />
        </svg>
      ))}
    </div>
  )
}