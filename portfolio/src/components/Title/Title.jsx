// src/components/Title/Title.jsx
// 페이지 타이틀 공통 컴포넌트 — variables.scss @mixin page-tit 기준 스타일 적용
import styles from './Title.module.scss'

/**
 * Title 컴포넌트
 * @param {string}  label          - (필수) 타이틀 텍스트
 * @param {string}  [className=''] - (선택) 외부에서 추가할 전역 className (페이지별 커스텀 스타일)
 * @param {string}  [as='h2']      - (선택) 렌더링할 HTML 헤딩 태그 (h2 | h3 | h4)
 */
const Title = ({ label, className = '', as = 'h2' }) => {
    // as prop을 대문자 변수로 재할당 — JSX 컴포넌트는 대문자 변수여야 렌더링됨
    const Tag = as
    return (
        // styles.title: @mixin page-tit 기본 스타일
        // className: 호출 측에서 추가할 전역 스타일 (없으면 빈 문자열)
        <Tag className={`${styles.title} ${className}`.trim()}>
            {label}
        </Tag>
    )
}

export default Title
