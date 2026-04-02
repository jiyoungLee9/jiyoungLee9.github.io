// src/components/Button/Button.jsx
// 공통 버튼 컴포넌트 — button / a / input 태그 전환 가능
import styles from './Button.module.scss'

/**
 * Button 컴포넌트
 * @param {string}   label           - (필수) 버튼 텍스트
 * @param {boolean}  [subType=false] - (선택) true 시 소형 버튼 .type_sub 적용
 * @param {string}   [icon='']       - (선택) 아이콘 종류 'download' | 'link' | ''
 * @param {string}   [className='']  - (선택) 외부 추가 전역 className
 * @param {string}   [as='button']   - (선택) 렌더링 태그 'button' | 'a' | 'input'
 * @param {string}   [href='']       - (선택) as='a' 일 때 링크 주소
 * @param {string}   [target='']     - (선택) as='a' 일 때 '_blank' 등 target 속성
 * @param {string}   [download='']   - (선택) as='a' 일 때 파일 다운로드 속성, 저장될 파일명 지정 가능
 * @param {string}   [type='button'] - (선택) as='button' 일 때 type 속성 'button' | 'submit' | 'reset'
 * @param {function} [onClick]       - (선택) 클릭 이벤트 핸들러
 * @param {boolean}  [disabled=false]- (선택) 비활성화 상태
 */

/*
 * -----------------------------------------------
 * 사용 예시
 * -----------------------------------------------
 * import Button from '../../components/Button/Button'
 *
 * // 기본 버튼
 * <Button label="이력서 (pdf) download" />
 *
 * // 다운로드 아이콘 + 기본 버튼
 * <Button label="이력서 (pdf) download" icon="download" />
 *
 * // 외부링크 아이콘 + 기본 버튼 → <a> 태그
 * <Button label="홈페이지 방문하기" icon="link" as="a" href="https://..." target="_blank" />
 *
 * // 파일 다운로드 버튼 → download 속성으로 저장 파일명 지정
 * <Button label="이력서 download" icon="download" as="a" href="/assets/pdf/resume.pdf" download="이력서_이지영.pdf" />
 *
 * // 소형 버튼
 * <Button label="이력서 (pdf) download" subType={true} icon="download" />
 *
 * // submit 버튼
 * <Button label="제출하기" type="submit" />
 *
 * // 외부 className 추가
 * <Button label="이력서 (pdf) download" className={styles.my_btn} />
 * -----------------------------------------------
 */

// 아이콘 className 매핑
const ICON_CLASS = {
    download: styles.ico_download,
    link:     styles.ico_link,
}

const Button = ({
    label,
    subType   = false,
    icon      = '',
    className = '',
    as        = 'button',
    href      = '',
    target    = '',
    download  = '',
    type      = 'button',
    onClick,
    disabled  = false,
}) => {
    // 조합 className
    const btnClass = [
        styles.btn,
        subType ? styles.type_sub : '',
        className,
    ].filter(Boolean).join(' ')

    // 아이콘 <i> 태그 — icon prop 값이 있을 때만 렌더링
    const IconEl = icon && ICON_CLASS[icon]
        ? <i className={ICON_CLASS[icon]} aria-hidden="true" />
        : null

    // as='input' 은 자식 요소 불가 → value 속성으로 label 처리, 아이콘 미지원
    if (as === 'input') {
        return (
            <input
                type="button"
                value={label}
                className={btnClass}
                onClick={onClick}
                disabled={disabled}
            />
        )
    }

    // as='a' → <a> 태그
    if (as === 'a') {
        return (
            <a
                href={href}
                target={target}
                rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                download={download || undefined}
                className={btnClass}
                onClick={onClick}
                aria-disabled={disabled || undefined}
            >
                {label}
                {IconEl}
            </a>
        )
    }

    // 기본 as='button'
    return (
        <button
            type={type}
            className={btnClass}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
            {IconEl}
        </button>
    )
}

export default Button
