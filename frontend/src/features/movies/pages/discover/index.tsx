import { SearchFilters } from "@/components"
import styles from "./styles.module.scss"
import { DiscoverList } from "../components/discover-list"

export const DiscoverPage = () => {
  return (
    <div className={styles.wrapper}>
      <SearchFilters />
      <DiscoverList />
    </div>
  )
}