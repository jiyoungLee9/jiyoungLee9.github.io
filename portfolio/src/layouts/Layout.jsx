import { useEffect, useRef, useState } from 'react'
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
  const mainRef = useRef(null)
  const [showTopBtn, setShowTopBtn] = useState(false)

  // 현재 경로에 해당하는 페이지 className 조회 (없으면 빈 문자열)
  const pageClass = PAGE_CLASS_MAP[pathname] ?? ''

  // 페이지 이동 시 .main 스크롤 위치를 항상 top으로 초기화
  useEffect(() => {
    mainRef.current?.scrollTo(0, 0)
  }, [pathname])

  // .main 스크롤 발생 시 위로가기 버튼 노출 여부 감지
  useEffect(() => {
    const el = mainRef.current
    if (!el) return

    const handleScroll = () => setShowTopBtn(el.scrollTop > 0)
    el.addEventListener('scroll', handleScroll)
    return () => el.removeEventListener('scroll', handleScroll)
  }, [])

  // 위로가기 버튼 클릭 시 .main 스크롤 top으로 이동
  const handleScrollTop = () => mainRef.current?.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    // wrap에 페이지 구분 ClassName 추가
    <div className={` ${styles.wrap} ${pageClass}`}>
      <Header />
      <main ref={mainRef} className={styles.main}>
        <Outlet />
      </main>
      <Footer />
      {showTopBtn && (
        <button
          type="button"
          className={styles.top_btn}
          onClick={handleScrollTop}
          aria-label="위로가기"
        />
      )}
    </div>
  )
}

export default Layout