// portfolio/src/pages/Philosophy/Philosophy.jsx
import styles from './Philosophy.module.scss'
import Title from '../../components/Title/Title'

const Philosophy = () => {
  return (
    <section className={styles.main_philosophy}>
      <Title label="Philosophy" className={styles.heading} />

      <div className={styles.box_philosophy}>
        <h3 className={styles.box_sub_tit}>코드를 대하는 태도</h3>
        <h4 className={styles.box_tit}>그 코드는 대부분 그만의 사정이 있다</h4>
        <p className={styles.box_info}>
          새로운 프로젝트에 투입될 때 가장 먼저 하는 일은 기존 코드를 읽는 것입니다. <br />
          오래된 코드라도 함부로 걷어내기보다, 왜 그렇게 작성됐는지를 먼저 이해하려 합니다. <br />
          그 위에서 구조를 정의하고, 재사용 가능한 단위를 먼저 설계하고, 유지보수를 고려한 CSS 구조를 잡습니다. 완성된 화면보다 다음 사람이 이어받을 수 있는 코드를 더 중요하게 생각합니다.
        </p>
      </div>

      <div className={styles.box_philosophy}>
        <h3 className={styles.box_sub_tit}>협업을 대하는 태도</h3>
        <h4 className={styles.box_tit}>많은 사람이 모여서 만들어낸다, 그래서 내 것이 아닌 것이 없다</h4>
        <p className={styles.box_info}>
          UI는 혼자 완성되지 않습니다. <br />
          기획자의 의도, 디자이너의 결정, 개발자의 구조 위에서 제 작업이 완성됩니다. 그렇기에 소통을 줄이는 것이 아니라 늘리는 쪽을 선택해왔습니다. 동시에 함께 만든 결과물이라도 내가 맡은 부분은 끝까지 내 책임이라고 생각합니다. <br />
          협업은 책임을 나누는 게 아니라, 각자의 책임을 다해 하나로 모으는 과정이라고 믿습니다.
        </p>
      </div>

      <div className={styles.box_philosophy}>
        <h3 className={styles.box_sub_tit}>새로운 서비스를 대하는 태도</h3>
        <h4 className={styles.box_tit}>기승전결, 처음부터 끝까지 UI를 책임진다</h4>
        <p className={styles.box_info}>
          새로운 서비스를 구축할 때 저는 퍼블리싱 단계에서만 합류하는 방식을 선호하지 않습니다. <br />
          고객의 요구사항이 검토되는 시점부터 UX 설계 과정에 관심을 갖고 협업에 참여합니다. <br />
          화면이 어떻게 구조화되어야 하는지, 사용자 흐름이 어디서 끊기는지를 초기부터 함께 고민해야 이후 구현 단계에서 불필요한 수정을 줄일 수 있기 때문입니다. <br />
          개발과 테스트를 거쳐 실제 서비스가 배포되는 순간까지, UIUX의 완성도를 놓지 않는 것이 제가 프로젝트를 대하는 방식입니다.
        </p>
      </div>

      <div className={styles.box_philosophy}>
        <h3 className={styles.box_sub_tit}>변화를 대하는 태도</h3>
        <h4 className={styles.box_tit}>기술은 언제나 새로울 수 밖에 없다</h4>
        <p className={styles.box_info}>
          20년을 일하면서 기술 환경은 늘 바뀌었습니다. <br />
          그때마다 저항보다는 먼저 써보는 쪽을 택했고, 최근에는 LLM을 학습 도구로 활용해 React 환경을 직접 구축해봤습니다. <br />
          새로운 기술 앞에서 중요한 건 전부를 빠르게 아는 것이 아니라, 숲의 구조를 먼저 파악한 뒤 필요한 나뭇잎을 찾아가는 것이라 생각합니다. <br />
          그 순서를 지켜온 덕분에 어떤 환경에서도 길을 잃지 않았습니다.
        </p>
      </div> 
      
    </section>
  )
}
export default Philosophy
