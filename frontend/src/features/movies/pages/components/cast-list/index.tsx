import type { Cast } from "@/types/movie/movie"
import { CastItem } from "../cast-item"

import styles from "./styles.module.scss"

type CastListProps = {
  cast: Cast[]
}

export const CastList = ({ cast }: CastListProps) => {
  return (
    <div className={styles.wrapper}>
      <h2>Elenco</h2>
      <ul className={styles['cast-list']}>
        {cast.map((castItem, index) => (
          <li key={index}>
            <CastItem castItem={castItem} />
          </li>
        ))}
      </ul>
    </div>
  )
}