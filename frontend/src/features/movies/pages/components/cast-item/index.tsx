import type { Cast } from "@/types/movie/movie"

import styles from "./styles.module.scss"

type CastItemProps = {
  castItem: Cast
}

export const CastItem = ({ castItem }: CastItemProps) => {
  return (
    <div className={styles.wrapper}>
      <div>
        {castItem.profile_path && (
          <img 
            src={`https://image.tmdb.org/t/p/original/${castItem.profile_path}.jpg`}
            alt={castItem.name} 
            loading="lazy"
            decoding="async"
            srcSet={`
              https://image.tmdb.org/t/p/w200/${castItem.profile_path}.jpg 200w,
              https://image.tmdb.org/t/p/w300/${castItem.profile_path}.jpg 300w,
              https://image.tmdb.org/t/p/w500/${castItem.profile_path}.jpg 500w,
              https://image.tmdb.org/t/p/original/${castItem.profile_path}.jpg 1000w
            `}
            fetchPriority="low"
            referrerPolicy="no-referrer"
          />
        )}
      </div>
      <div>
        <strong>{castItem.name}</strong>
        <p>{castItem.character}</p>
      </div>
    </div>
  )
}