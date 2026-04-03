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

      <div className={styles.page_main_title}>
          <p className={styles.tit_strong}>20년의 마크업 통찰, React의 구조적 설계로 깊이를 더하다.</p>
          <p className={styles.tit_info}>
            20년 차 UI 웹 퍼블리셔로서, 수많은 프로젝트의 중심에서 디자인과 개발을 잇는 가교 역할을 해왔습니다. <br />
            기술의 변화 속에서도 변하지 않는 <strong>UI의 본질을 탐구</strong>하며, 이제는 그 깊이를 <strong>React 기반의 컴포넌트 아키텍처로 확장</strong>하고 있습니다.
          </p>
      </div>

      <div className={styles.box_info}>
        <strong className={styles.tit}>Core Expertise & Transition</strong>
        <ol className={styles.list}>
          <li>
            <strong className={styles.item_tit}>통합적 UI 설계</strong>
            <p className={styles.item_desc}>JSP/jQuery 환경의 풍부한 경험을 바탕으로, 복잡한 UI를 효율적인 React 컴포넌트 구조로 재정의(Redefine)합니다.</p>
          </li>
          <li>
            <strong className={styles.item_tit}>웹 접근성 & 시맨틱 마크업</strong>
            <p className={styles.item_desc}>단순한 구현을 넘어 보편적 사용자 경험을 위한 표준 준수를 원칙으로 합니다.</p>
          </li>
          <li>
            <strong className={styles.item_tit}>유지보수 지향적 코드</strong>
            <p className={styles.item_desc}>"내 것이 아닌 코드는 없다"는 책임감으로, 동료 개발자가 활용하기 좋고 확장이 용이한 구조를 설계합니다.</p>
          </li>
        </ol>
      </div>
    </section>
  )
}
export default AboutMe
