import { SearchFilters } from "@/components"
import styles from "./styles.module.scss"

export const DiscoverPage = () => {
  return (
    <div className={styles.wrapper}>
      <SearchFilters />
    </div>
  )
}