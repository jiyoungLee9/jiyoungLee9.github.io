// portfolio/src/pages/NotFound/NotFound.jsx
// 404 페이지 — 정의되지 않은 경로 접근 시 노출 (App.jsx 의 path="*")
import { useNavigate } from 'react-router-dom'
import styles from './NotFound.module.scss'
import Button from '../../components/Button/Button'

const NotFound = () => {
  const navigate = useNavigate()

  // 이전으로: 사이트 내 이동 이력이 있으면 뒤로, 주소를 직접 입력해 들어온 경우엔 홈으로
  const handleBack = () => {
    const hasHistory = (window.history.state?.idx ?? 0) > 0
    if (hasHistory) navigate(-1)
    else navigate('/')
  }

  return (
    <section className={styles.main_not_found}>
      <div className={styles.error_card}>
        <p className={styles.code} aria-hidden="true">404</p>
        <h2 className={styles.tit}>페이지를 찾을 수 없습니다.</h2>
        <p className={styles.info}>
          주소가 잘못 입력되었거나, 페이지가 이동 또는 삭제되었습니다. <br />
          입력한 주소를 다시 확인해 주세요.
        </p>

        <div className={styles.actions}>
          <Button label="이전으로" subType={true} className={styles.btn} onClick={handleBack} />
          <Button
            label="홈으로 이동"
            subType={true}
            className={`${styles.btn} ${styles.btn_primary}`}
            onClick={() => navigate('/')}
          />
        </div>
      </div>
    </section>
  )
}

export default NotFound
