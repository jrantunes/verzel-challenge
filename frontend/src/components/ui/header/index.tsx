import { Link, useLocation } from "react-router"
import styles from "./styles.module.scss"

export const Header = () => {
  const { pathname } = useLocation()

  return (
    <header className={styles.wrapper}>
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
                FILMS
              </Link>
            </li>
            <li>
              <Link 
                to="/favorites" 
                className={pathname === "/favorites" ? "active" : undefined}
              >
                FAVORITES
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}