// portfolio/src/pages/Skills/Skills.jsx
import styles from './Skills.module.scss'
import Title from '../../components/Title/Title'

const Skills = () => {
  return (
    <section className={styles.main_skills}>
      <Title label="Skills & Expertise" className={styles.heading} />

      <div className={styles.page_main_title}>
          <p className={styles.tit_strong}>어떤 환경에서도 UI의 완성도와 구조를 함께 책임집니다</p>
      </div>

      <div className={styles.skills_box}>
        <div>
          <h4 className={styles.box_tit}>Legacy</h4>
          <dl className={styles.box_list}>
            <dt className={styles.item_tit}>jQuery / DOM API</dt>
            <dd className={styles.item_text}>레거시 코드 해석, 수정</dd>
            <dt className={styles.item_tit}>JSP / JSTL 환경</dt>
            <dd className={styles.item_text}>서버 렌더링 퍼블리싱</dd>
            <dt className={styles.item_tit}>Framework / Platform</dt>
            <dd className={styles.item_text}>전자정부프레임워크, WebSquare, Nexacro</dd>
            <dt className={styles.item_tit}>SVN</dt>
            <dd className={styles.item_text}>형상관리 경험</dd>  
          </dl>
        </div>
        <div>
          <h4 className={styles.box_tit}>공통 기반</h4>
          <dl className={styles.box_list}>
            <dt className={styles.item_tit}>HTML / CSS / SCSS</dt>
            <dd className={styles.item_text}>시멘틱마크업, 모듈설계</dd>
            <dt className={styles.item_tit}>JavaScript (ES6+)</dt>
            <dd className={styles.item_text}>DOM, 이벤트 설계</dd>
            <dt className={styles.item_tit}>반응형웹 / 웹, 앱 접근성</dt>
            <dd className={styles.item_text}>WA, MA인증 진행 및 획득</dd>
            <dt className={styles.item_tit}>Figma / GitHub / Jira</dt>
            <dd className={styles.item_text}>UX 및 디자인 해석, 협업, 문서화</dd>
            <dt className={styles.item_tit}>하이브리드웹앱 대응</dt>
            <dd className={styles.item_text}>웹뷰, 모바일 UI대응</dd>                
          </dl>
        </div>
        <div>
          <h4 className={styles.box_tit}>Modern</h4>
          <dl className={styles.box_list}>
            <dt className={styles.item_tit}>React + Vite</dt>
            <dd className={styles.item_text}>컴포넌트설계, Props 설계</dd>
            <dt className={styles.item_tit}>CSS / SCSS Modules</dt>
            <dd className={styles.item_text}>스타일격리, 토큰설계</dd>
            <dt className={styles.item_tit}>Storybook</dt>
            <dd className={styles.item_text}>컴포넌트 문서, 상태 UI 설계</dd>
            <dt className={styles.item_tit}>GitHub Actions</dt>
            <dd className={styles.item_text}>자동배포 Pages</dd>                
          </dl>
        </div>
      </div>

      <div className={styles.skills_description}>
        <h4 className={styles.tit}>Core</h4>
        <div className={styles.list}>
          <dl className={styles.item}>
            <dt className={styles.item_tit}>1. HTML5 / CSS3</dt>
            <dd className={styles.item_desc}>시맨틱 마크업과 구조적 설계 기준으로 작성. 유지보수를 전제한 네이밍·계층 설계</dd>
            <dt className={styles.item_tit}>2. SCSS</dt>
            <dd className={styles.item_desc}>변수·믹스인·모듈 구조를 직접 설계. 레거시 전역 CSS 충돌 추적 및 정리 경험</dd>
            <dt className={styles.item_tit}>3. JavaScript (ES6+)</dt>
            <dd className={styles.item_desc}>DOM 조작부터 컴포넌트 이벤트 설계까지. jQuery, Grid, Chart 등 Library 활용 가능</dd>
            <dt className={styles.item_tit}>4. 반응형 웹</dt>
            <dd className={styles.item_desc}>미디어쿼리 기반 설계. 모바일 웹뷰(하이브리드 앱) 대응 경험 포함</dd>
            <dt className={styles.item_tit}>5. 웹 접근성</dt>
            <dd className={styles.item_desc}>
              WCAG 기준 준수 및 웹접근성 인증마크(WA, MA인증) 획득 프로세스 주도 경험<br />
              KWCAG 2.X 기준 준수 (행안부), KRDS 가이드라인 준수 (행안부), 전자정부 웹사이트 품질관리 지침 준수 (행안부)
            </dd>
            <dt className={styles.item_tit}></dt>
            <dd className={styles.item_desc}></dd>   
          </dl>
        </div>

        <h4 className={styles.tit}>Modern</h4>
        <div className={styles.list}>
          <dl className={styles.item}>
            <dt className={styles.item_tit}>1. React + Vite</dt>
            <dd className={styles.item_desc}>함수형 컴포넌트 기반 UI 설계. Props 계약·상태 관리 분리 원칙 준수</dd>
            <dt className={styles.item_tit}>2. SCSS Modules</dt>
            <dd className={styles.item_desc}>컴포넌트 단위 스타일 격리. 전역 오염 없는 구조 설계</dd>
            <dt className={styles.item_tit}>3. Storybook</dt>
            <dd className={styles.item_desc}>컴포넌트 명세·인터랙션 문서화. 개발자 협업을 위한 UI 계약서로 활용</dd>
          </dl>
        </div>

        <h4 className={styles.tit}>Legacy</h4>
        <div className={styles.list}>
          <dl className={styles.item}>
            <dt className={styles.item_tit}>1. jQuery / DOM API</dt>
            <dd className={styles.item_desc}>레거시 코드의 의도를 파악하고 영향 범위를 최소화하며 수정한 경험 다수</dd>
            <dt className={styles.item_tit}>2. JSP / JSTL 환경 대응</dt>
            <dd className={styles.item_desc}>서버 렌더링 기반 프로젝트에서 퍼블리싱 구조 설계 및 유지보수</dd>
            <dt className={styles.item_tit}>3. Framework / Platform</dt>
            <dd className={styles.item_desc}>전자정부프레임워크 및 WebSquare, Nexacro 등 공공·금융 SI 환경의 플랫폼 기반 UI 개발 경험 다수</dd>
          </dl>
        </div>        

      </div>

    </section>
  )
}
export default Skills
