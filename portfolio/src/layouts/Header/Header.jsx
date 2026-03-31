import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'

const NAV_ITEMS = [
  { label: 'Home',          path: '/' },
  { label: 'About Me',          path: '/about-me' },
  { label: 'Skills & Expertise', path: '/skills' },
  { label: 'Works',             path: '/works' },
  { label: 'Philosophy',        path: '/philosophy' },
  { label: 'Resume & Career',   path: '/resume' },
]

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.gnb} aria-label="주요 메뉴">
        <ul className={styles.list}>
          {NAV_ITEMS.map(({ label, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                end={path === '/'}
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ''}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header