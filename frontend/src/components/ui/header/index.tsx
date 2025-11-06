import { Link, useLocation } from "react-router"
import styles from "./styles.module.scss"

export const Header = () => {
  const { pathname } = useLocation()

  const isDetailsPage = pathname.startsWith("/movie/")

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
        </nav>
      </div>
    </header>
  )
}