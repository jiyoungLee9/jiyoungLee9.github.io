import { useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styles from './Header.module.scss'

const SITE_NAME = 'Jiyoung Lee'

const NAV_ITEMS = [
  { label: 'Home',             path: '/' },
  { label: 'About Me',         path: '/about-me' },
  { label: 'Skills & Expertise', path: '/skills' },
  { label: 'Works',            path: '/works' },
  { label: 'Philosophy',       path: '/philosophy' },
  { label: 'Resume & Career',  path: '/resume' },
]

const Header = () => {

  //<title> 내 화면명 명시 (NAV_ITEMS.label 표기됨)
  const location = useLocation()   // 현재 URL 감지

  useEffect(() => {
    const current = NAV_ITEMS.find(item =>
      item.path === '/'
        ? location.pathname === '/'          // Home은 정확히 / 일 때만
        : location.pathname.startsWith(item.path)  // 나머지는 경로 시작값으로 비교
    )
    document.title = current
      ? `${current.label} | ${SITE_NAME}`   // 매칭된 메뉴 있을 때
      : SITE_NAME                            // 매칭 없을 때 기본값
  }, [location.pathname])  // URL이 바뀔 때마다 실행

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