// portfolio/src/pages/ErrorPage/ErrorPage.jsx
// 공통 오류 페이지 — 원인 불명의 모든 오류 대응 (ErrorBoundary 의 fallback)
// header/footer 없이 단독 노출, 홈 이동 버튼만 제공
import styles from './ErrorPage.module.scss'
import Button from '../../components/Button/Button'

const ErrorPage = () => {
  return (
    <section className={styles.main_error}>
      <div className={styles.error_card}>
        <p className={styles.code} aria-hidden="true">오류</p>
        <h2 className={styles.tit}>일시적인 오류가 발생했습니다.</h2>
        <p className={styles.info}>
          요청하신 페이지를 표시할 수 없습니다. <br />
          잠시 후 다시 시도해 주세요.
        </p>

        <div className={styles.actions}>
          {/* Router 바깥에서 렌더링되므로 <a>로 전체 새로고침 이동 (오류 상태 초기화 효과) */}
          <Button label="홈으로 이동" subType={true} as="a" href="/" className={styles.btn_primary} />
        </div>
      </div>
    </section>
  )
}

export default ErrorPage
