// portfolio/src/pages/AboutMe/AboutMe.jsx
import styles from './AboutMe.module.scss'
import Title from '../../components/Title/Title'

const AboutMe = () => {
  return (
    <section className={styles.main_about_me}>
      {/* Title 컴포넌트
          - label   : 타이틀 텍스트
          - className: AboutMe.module.scss 의 .heading 스타일 추가 적용
          - as      : h2 태그로 렌더링 (기본값이므로 생략 가능) */}
      <Title label="About Me" className={styles.heading} />
      {/* 콘텐츠 추후 작성 */}
    </section>
  )
}
export default AboutMe
