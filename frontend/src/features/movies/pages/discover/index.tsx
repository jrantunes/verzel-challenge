import { SearchFilters } from "@/components"
import styles from "./styles.module.scss"
import { DiscoverList } from "../components/discover-list"
import { useRecoilValue } from "recoil"
import { moviesFilter } from "@/state/atom"

export const DiscoverPage = () => {
  const filter = useRecoilValue(moviesFilter)

  return (
    <div className={styles.wrapper}>
      {!filter.search && <SearchFilters />}
      <DiscoverList />
    </div>
  )
}