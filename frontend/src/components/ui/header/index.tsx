import { Link, useLocation } from "react-router"
import { SearchInput } from "../search-input"
import { useSearchMovies } from "@/state/hooks/useSearchMovies"
import styles from "./styles.module.scss"

export const Header = () => {
  const { input, setInput } = useSearchMovies()
  const { pathname } = useLocation()

  const isDetailsPage = pathname.startsWith("/movie/")
  const isHomePage = pathname === "/"

  return (
    <header className={`${styles.wrapper} ${isDetailsPage ? styles.details : ''}`}>
      <div>
        <Link to="/">
          <h1>VERZELMOVIES</h1>
        </Link>
        <nav>
          <ul>
            <li>
              <Link 
                to="/" 
                className={pathname === "/" ? "active" : undefined}
              >
                FILMES
              </Link>
            </li>
            <li>
              <Link 
                to="/favorites" 
                className={pathname === "/favorites" ? "active" : undefined}
              >
                FAVORITOS
              </Link>
            </li>
          </ul>
          {isHomePage && (
            <SearchInput 
              value={input} 
              onChange={(e) => setInput(e.currentTarget.value)} 
            />
          )}
        </nav>
      </div>
    </header>
  )
}