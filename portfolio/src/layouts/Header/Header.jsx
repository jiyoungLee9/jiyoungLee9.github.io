import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styles from './Header.module.scss'

const SITE_NAME = 'Jiyoung Lee Portfolio'

const NAV_ITEMS = [
  { label: 'Home',             path: '/' },
  { label: 'About Me',         path: '/about-me' },
  { label: 'Skills & Expertise', path: '/skills' },
  { label: 'Works',            path: '/works' },
  { label: 'Philosophy',       path: '/philosophy' },
  { label: 'Resume & Career',  path: '/resume' },
]

const Header = () => {

  // 모바일 gnb 열림/닫힘 상태 (true: 열림, false: 닫힘)
  const [isOpen, setIsOpen] = useState(false)

  // gnb 열기 — .header_menu 클릭 시 호출
  const handleOpen  = () => setIsOpen(true)

  // gnb 닫기 — .header_menu_close 클릭 또는 메뉴 선택 시 호출
  const handleClose = () => setIsOpen(false)

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

        {/* 모바일 gnb
            - 기본: right:-100% 으로 뷰포트 밖에 위치
            - .is_open 선언 시: right:0 으로 슬라이드인 */}
        <nav
          className={`${styles.gnb} ${isOpen ? styles.is_open : ''}`}
          aria-label="주요 메뉴"
          aria-hidden={!isOpen}   // 모바일에서 닫혔을 때 스크린리더 제외
        >
            <ul className={styles.list}>
                {NAV_ITEMS.map(({ label, path }) => (
                <li key={path}>
                    <NavLink
                    to={path}
                    end={path === '/'}
                    className={({ isActive }) =>
                        `${styles.link} ${isActive ? styles.active : ''}`
                    }
                    onClick={handleClose}  // 메뉴 선택 시 모바일 gnb 닫기
                    >
                    {label}
                    </NavLink>
                </li>
                ))}
            </ul>
        </nav>

        {/* 햄버거 메뉴 버튼
            - 모바일 해상도에서만 노출
            - gnb 닫힘 상태일 때: .is_view 선언으로 display:block
            - gnb 열림 상태일 때: .is_view 제거로 display:none */}
        <button
          type="button"
          className={`${styles.header_menu} ${!isOpen ? styles.is_view : ''}`}
          onClick={handleOpen}
          aria-label="메뉴 열기"
          aria-expanded={isOpen}
        />

        {/* 닫기(X) 버튼
            - 모바일 해상도에서만 노출
            - gnb 열림 상태일 때: .is_view 선언으로 display:block
            - gnb 닫힘 상태일 때: .is_view 제거로 display:none */}
        <button
          type="button"
          className={`${styles.header_menu_close} ${isOpen ? styles.is_view : ''}`}
          onClick={handleClose}
          aria-label="메뉴 닫기"
        />

    </header>
  )
}

export default Header