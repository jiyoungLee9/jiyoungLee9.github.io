// src/components/Title/Title.jsx
// 페이지 타이틀 공통 컴포넌트 — variables.scss @mixin page-tit 기준 스타일 적용
import PropTypes from 'prop-types'
import styles from './Title.module.scss'

/**
 * Title 컴포넌트
 * @param {string}  label      - (필수) 타이틀 텍스트
 * @param {string}  className  - (선택) 외부에서 추가할 전역 className (페이지별 커스텀 스타일)
 * @param {string}  as         - (선택) 렌더링할 HTML 헤딩 태그, 기본값 'h2' (h2 | h3 | h4)
 */
const Title = ({ label, className, as }) => {
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

// prop-types 선언 — 타입 검증 및 개발 환경 경고 표시
Title.propTypes = {
    label:     PropTypes.string.isRequired,   // (필수) 타이틀 텍스트
    className: PropTypes.string,              // (선택) 페이지별 추가 className
    as:        PropTypes.oneOf(['h2', 'h3', 'h4']),  // (선택) 헤딩 태그 레벨
}

// 기본값 선언 — props 미전달 시 안전하게 동작
Title.defaultProps = {
    className: '',    // 빈 문자열로 className 병합 시 오류 방지
    as:        'h2',  // 기본 헤딩 태그
}

export default Title
