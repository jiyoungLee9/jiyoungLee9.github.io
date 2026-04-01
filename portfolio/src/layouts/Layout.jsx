import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import styles from './Layout.module.scss'

// 경로(pathname) → 페이지 구분 className 매핑
// _pages.scss 의 .page-{name} 과 1:1 대응
const PAGE_CLASS_MAP = {
  '/'           : 'page-home',
  '/about-me'   : 'page-about-me',
  '/skills'     : 'page-skills',
  '/works'      : 'page-works',
  '/philosophy' : 'page-philosophy',
  '/resume'     : 'page-resume',
}

const Layout = () => {
  const { pathname } = useLocation()

  // 현재 경로에 해당하는 페이지 className 조회 (없으면 빈 문자열)
  const pageClass = PAGE_CLASS_MAP[pathname] ?? ''

  return (
    // wrap에 페이지 구분 className 추가
    <div className={` ${styles.wrap} ${pageClass}`}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout