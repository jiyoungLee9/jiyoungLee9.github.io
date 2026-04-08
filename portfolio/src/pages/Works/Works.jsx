// portfolio/src/pages/Works/Works.jsx
import styles from './Works.module.scss'
import Title from '../../components/Title/Title'


const Works = () => {
  return (
    <section className={styles.main_works}>
      <Title label="Works" className={styles.heading} />

      <div className={styles.page_main_title}>
          <p className={styles.tit_strong}>직접 참여한 프로젝트, 그 현장의 판단과 결과를 기록했습니다.</p>
      </div>      

      <div className={styles.work_box}>        
        <h4 className={styles.work_title}>현대캐피탈 Digital 시스템 UIUX 운영</h4>
        <dl className={styles.work_info}>
          <dt className={styles.tit}>수행년도</dt>
          <dd className={styles.value}>2024.12 - 2025.12</dd>
          <dt className={styles.tit}>분류</dt>
          <dd className={styles.value}>금융권</dd>
          <dt className={styles.tit}>역할</dt>
          <dd className={styles.value}>퍼블리싱팀 PL</dd>
          <dt className={styles.tit}>기술</dt>
          <dd className={styles.value}>
            <span className={styles.badge_stack}>HTML</span>
            <span className={styles.badge_stack}>CSS</span>
            <span className={styles.badge_stack}>JavaScript</span>
            <span className={styles.badge_stack}>jQuery</span>
            <span className={styles.badge_stack}>WebView</span>
            <span className={styles.badge_stack}>웹접근성(인증획득)</span>
            <span className={styles.badge_stack}>앱접근성(인증획득)</span>
          </dd>
        </dl>
        <h5 className={styles.work_message}>운영 중인 서비스를 멈추지 않고, 디자인시스템을 개선했습니다.</h5>
        <div className={styles.work_experience}>
          <p>현대캐피탈의 대고객 서비스는 JSP/jQuery부터 Vue, React까지 레거시와 모던이 혼재한 환경이었습니다. <br />SM사업이었지만 고객은 2024년부터 설계한 새로운 디자인시스템을 실제 서비스에 녹여내는 과제를 동시에 요구했고, 이 두 가지를 분리하지 않으면 어느 쪽도 제대로 되지 않는다는 걸 초기에 파악했습니다.</p>
          <p>운영 생태계를 빠르게 파악한 뒤, UIUX PM과 팀원들과 R&R을 나눴습니다. <br />SM 대응을 기본 베이스로 유지하면서, 디자인시스템 전환 과제는 제가 단독으로 맡기로 했습니다. 가장 큰 과제는 운영 중인 서비스를 프리징 없이 교체하는 방식을 설계하는 일이었습니다. 기존 서비스는 디자인시스템화되지 않은 레거시로, 중복 CSS와 컴포넌트가 뒤섞인 상태였기에 단순 교체가 불가능했습니다.</p>
          <p>개발 화면을 직접 하나씩 확인하며 개발자들과 소통해 영향도가 있는 부분과 없는 부분을 구분했고, 그 결과를 기획·디자인·개발팀과 고객에게 커뮤니케이션하며 계획을 설득했습니다. WBS 설계, 신규 시스템 적용 방안, 운영 소스 충돌 해결, 배포 및 검수 협조 요청까지 전담했습니다.<br />1년에 걸쳐 color, typo, layout, UI 컴포넌트의 공통 변수화를 완료했고, 향후 진행 될 개발소스 개선 가이드를 작성하였습니다.</p>
        </div>
      </div>

      <div className={styles.work_box}>        
        <h4 className={styles.work_title}>보건복지부 코로나19 홈페이지 구축 및 운영</h4>
        <dl className={styles.work_info}>
          <dt className={styles.tit}>수행년도</dt>
          <dd className={styles.value}>2020.01 - 2020.12</dd>
          <dt className={styles.tit}>분류</dt>
          <dd className={styles.value}>공공</dd>
          <dt className={styles.tit}>역할</dt>
          <dd className={styles.value}>구축팀 PL & PA</dd>
          <dt className={styles.tit}>기술</dt>
          <dd className={styles.value}>
            <span className={styles.badge_stack}>UX설계</span>
            <span className={styles.badge_stack}>UI디자인</span>
            <span className={styles.badge_stack}>HTML</span>
            <span className={styles.badge_stack}>CSS</span>
            <span className={styles.badge_stack}>JavaScript</span>
            <span className={styles.badge_stack}>jQuery</span>
            <span className={styles.badge_stack}>Chart.js</span>
            <span className={styles.badge_stack}>반응형웹</span>
          </dd>
        </dl>
        <h5 className={styles.work_message}>매주 바뀌는 상황 속에서, UI도 함께 진화했습니다.</h5>
        <div className={styles.work_experience}>
          <p>보건복지부 구축사업에 참여 중이던 2019년 말, 코로나19 발생으로 기존 업무와 별개로 홈페이지 긴급 구축이 시작됐습니다. <br />국민 안전과 직결된 정보였기에 공공사업에서 흔치 않은 애자일 방식으로 진행됐고, 빠르게 변하는 상황에 맞춰 서비스 자체도 계속 진화해야 했습니다.</p>
          <p>초반에는 DB 설계 기간을 확보하기 위해 데이터를 직접 관리하며 서비스 공백이 생기지 않도록 했습니다. <br />이후 네이버·카카오와의 협업으로 검사소 지도 서비스를 추가했고, 영어만 지원하던 다국어를 일어·중국어까지 확대했습니다. <br />감염자 이동경로 서비스 신설, Chart.js 기반 전국 감염자 대시보드, WHO 연동 해외 감염정보 서비스까지 짧으면 2주, 길면 2개월 단위로 기능을 추가하며 보건복지부 담당자들과 수시로 논의해 완성도를 높였습니다. <br />서비스가 계속 바뀌는 상황에서도 일관된 UX와 접근성을 유지하는 것이 이 프로젝트에서 가장 신경 쓴 부분이었습니다.</p>
        </div>
      </div>

      <div className={styles.work_box}>        
        <h4 className={styles.work_title}>CJ올리브네트웍스 원오더 오채널 / mPOS / BackOffice 구축</h4>
        <dl className={styles.work_info}>
          <dt className={styles.tit}>수행년도</dt>
          <dd className={styles.value}>2022.01 - 2022.10</dd>
          <dt className={styles.tit}>분류</dt>
          <dd className={styles.value}>사기업</dd>
          <dt className={styles.tit}>역할</dt>
          <dd className={styles.value}>UI퍼블리셔</dd>
          <dt className={styles.tit}>기술</dt>
          <dd className={styles.value}>
            <span className={styles.badge_stack}>HTML</span>
            <span className={styles.badge_stack}>CSS</span>
            <span className={styles.badge_stack}>SCSS</span>
            <span className={styles.badge_stack}>JavaScript</span>
            <span className={styles.badge_stack}>jQuery</span>
            <span className={styles.badge_stack}>AUIGrid</span>
            <span className={styles.badge_stack}>jqGrid</span>
            <span className={styles.badge_stack}>반응형웹</span>
            <span className={styles.badge_stack}>WebView</span>
          </dd>
        </dl>
        <h5 className={styles.work_message}>웹이든 앱이든, 같은 UI로 동작해야 했습니다.</h5>
        <div className={styles.work_experience}>
          <p>기획자, 디자이너, 퍼블리셔, 프론트엔드, 백엔드, 앱 개발자 각 1인, 총 6인이 팀 전체였습니다. <br />10개월 안에 세 개의 신규 서비스를 지속적으로 구축해야 했고, 쉬어갈 여유는 없었습니다.</p>
          <p>웹과 앱을 동시에 만족시키는 하이브리드 UI가 핵심 과제였습니다. <br />특히 mPOS는 태블릿 전용이었지만 기종 제한이 없어 모든 컴포넌트를 반응형으로 설계했습니다. <br />주문·결제 관련 숫자 처리 로직이 많아, 유지보수를 고려한 JS 모듈화 방식을 고민하며 작성했습니다. <br />신규 서비스 전체의 백오피스를 레거시 시스템과 연동해서 사용하다 보니, 서비스 영속성을 위해 레거시 반응형 개선도 함께 수행했습니다. <br />다양한 grid 라이브러리가 혼재한 환경에서 resize 시 정보 노출 오류가 생기지 않도록 커스텀 JS를 직접 작성하며 대응했습니다.</p>
        </div>
      </div>

      <div className={styles.work_box}>        
        <h4 className={styles.work_title}>공정거래위원회 데이터포털 구축사업 2차</h4>
        <dl className={styles.work_info}>
          <dt className={styles.tit}>수행년도</dt>
          <dd className={styles.value}>2022.11 - 2023.03</dd>
          <dt className={styles.tit}>분류</dt>
          <dd className={styles.value}>공공</dd>
          <dt className={styles.tit}>역할</dt>
          <dd className={styles.value}>UI퍼블리셔</dd>
          <dt className={styles.tit}>기술</dt>
          <dd className={styles.value}>
            <span className={styles.badge_stack}>HTML</span>
            <span className={styles.badge_stack}>CSS</span>
            <span className={styles.badge_stack}>JavaScript</span>
            <span className={styles.badge_stack}>jQuery</span>
            <span className={styles.badge_stack}>Git</span>
            <span className={styles.badge_stack}>TOAST UI</span>
            <span className={styles.badge_stack}>반응형웹</span>
          </dd>
        </dl>
        <h5 className={styles.work_message}>기획이 끝나길 기다리지 않고, 먼저 움직였습니다.</h5>
        <div className={styles.work_experience}>
          <p>1차 사업 결과물에 고객이 만족하지 못해 개발팀 전체가 교체된 채 재구축으로 시작된 사업이었습니다. <br />방향성 재설계부터 시작하다 보니 기획과 디자인의 진행이 더뎠고, 그 속도를 기다리고만 있을 수는 없었습니다.</p>
          <p>UX 설계가 완료되기 전, 먼저 개발팀과 UI 구현 방식을 협의했습니다. <br />AA가 TOAST UI 도입을 언급했고, 실현 가능성 확인 후 퍼블리싱 방향을 그에 맞춰 선행 진행하기로 했습니다. <br />처음 접하는 라이브러리였지만 공식 문서를 파악하며 1차 디자인 기준으로 컴포넌트를 미리 작성했고, 기획 설계가 마무리될 즈음에는 스타일 정리 작업만 남은 상태로 일정을 맞출 수 있었습니다.</p>
        </div>
      </div>

      <div className={styles.work_box}>        
        <h4 className={styles.work_title}>수자원공사 차세대 업무시스템 개선 2차</h4>
        <dl className={styles.work_info}>
          <dt className={styles.tit}>수행년도</dt>
          <dd className={styles.value}>2021.05 - 2021.11</dd>
          <dt className={styles.tit}>분류</dt>
          <dd className={styles.value}>공공</dd>
          <dt className={styles.tit}>역할</dt>
          <dd className={styles.value}>UI디자인 / UI퍼블리셔</dd>
          <dt className={styles.tit}>기술</dt>
          <dd className={styles.value}>
            <span className={styles.badge_stack}>UI디자인</span>
            <span className={styles.badge_stack}>HTML</span>
            <span className={styles.badge_stack}>CSS</span>
            <span className={styles.badge_stack}>WebSquare</span>
            <span className={styles.badge_stack}>JavaScript</span>
            <span className={styles.badge_stack}>jQuery</span>
            <span className={styles.badge_stack}>웹접근성</span>
          </dd>
        </dl>
        <h5 className={styles.work_message}>우선순위를 정하는 것이, 곧 일을 끝내는 방법이었습니다.</h5>
        <div className={styles.work_experience}>
          <p>WebSquare 프레임워크 기반으로 UIUX 구현 비중을 줄이고 개발 중심으로 운영되는 사업이었습니다. <br />UIUX 인력은 기획 1인, 디자이너 겸 퍼블리셔 1인뿐이었고, 20개가 넘는 시스템을 개발하는 30명 이상의 프론트엔드 개발자들의 UI 이슈를 둘이서 감당해야 했습니다.</p>
          <p>공통개발팀과 협업해 공통 UI 활용을 기본으로 정하고, 시스템별 추가 UI 목록을 긴급도와 개발 영향도 기준으로 우선순위를 정해 대응했습니다.  <br />해외 사용자용 시스템의 경우 제한적인 브라우저 환경과 낮은 인터넷 속도를 감안한 별도 작업이 필요했고, 개발 업무와의 충돌을 피하기 위해 업무 외 시간에 처리하는 방식을 협의해 진행했습니다.  <br />한정된 인력으로 최대한 많은 시스템의 UI 만족도를 끌어올리기 위해 우선순위 판단과 빠른 실행을 반복했던 프로젝트였습니다.</p>
        </div>
      </div>

      <div className={styles.work_box}>        
        <h4 className={styles.work_title}>React UI Component 구축</h4>
        <dl className={styles.work_info}>
          <dt className={styles.tit}>수행년도</dt>
          <dd className={styles.value}>2026.01 - 2026.03</dd>
          <dt className={styles.tit}>분류</dt>
          <dd className={styles.value}>개인</dd>
          <dt className={styles.tit}>역할</dt>
          <dd className={styles.value}>1인 구축</dd>
          <dt className={styles.tit}>기술</dt>
          <dd className={styles.value}>
            <span className={styles.badge_stack}>UI디자인</span>
            <span className={styles.badge_stack}>HTML</span>
            <span className={styles.badge_stack}>CSS</span>
            <span className={styles.badge_stack}>SCSS</span>
            <span className={styles.badge_stack}>JavaScript</span>
            <span className={styles.badge_stack}>React</span>
            <span className={styles.badge_stack}>Vite</span>
            <span className={styles.badge_stack}>Storybook</span>
            <span className={styles.badge_stack}>Design Token</span>
            <span className={styles.badge_stack}>LLM 활용 학습</span>
          </dd>
        </dl>
        <h5 className={styles.work_message}>배우기로 했다면, 실제로 돌아가는 것을 만들어야 했습니다.</h5>
        <div className={styles.work_experience}>
          <p>React를 배우고 싶다는 생각은 있었지만, 단순히 튜토리얼을 따라가는 방식은 선택하지 않았습니다. <br />LLM을 통해 나의 현재 수준과 목적에 맞는 로드맵을 먼저 설계하고, 범위와 결과물을 정의한 뒤 시작했습니다. <br />배움의 도구로 AI를 쓰는 것이 실제로 효과적인지를 직접 확인해보고 싶었습니다.</p>
          <p>Gemini로 로드맵을 짜고, Claude를 메인으로 코드 작성과 학습을 병행했습니다. <br />스타일은 Tailwind 같은 유틸리티 라이브러리 대신 SCSS Modules로 직접 선언하며 브라우저 렌더링을 눈으로 확인하는 방식을 택했습니다. 레거시(JSP/jQuery)와 비교하며 컴포넌트의 역할과 범위, 프론트엔드 개발자와의 소통 방식을 이해하는 데 집중했고, View 역할에 충실한 Props 설계와 Storybook을 통한 명세 문서화까지 완성했습니다. <br />Design Token 연동, useState·useEffect·createPortal 등 필요한 Hook 활용, Grid 기반 페이지 예시까지 포함해 실무에서 쓸 수 있는 수준을 목표로 삼았습니다.</p>
          <p>책이나 강의가 아닌 AI와 함께 계획하고 실행하는 방식은 생각보다 효과적이었습니다. <br />막히는 지점마다 맥락을 이해한 답변을 받을 수 있었고, 레거시에서 Modern으로 전환되는 프로젝트에서 UIUX 담당자가 어떤 지점을 준비해야 하는지를 직접 체감하며 그릴 수 있었습니다.</p>
          <p>
            - <a className={styles.link} href="https://jylee9-react-uicomponent.netlify.app/?path=/docs/design-system-colors--docs" target='_blank' title="새창">Component Storybook  바로가기</a><br />
            - <a className={styles.link} href="https://jiyounglee9.github.io/react_learning_log/" target='_blank' title="새창">학습기록일지 바로가기</a>
          </p>
        </div>
      </div>

      <p className={styles.notice_msg}>* 전체 작업목록은 경력기술서를 참고해 주십시오.</p>      

    </section>
  )
}
export default Works
