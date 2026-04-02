// portfolio/src/pages/Resume/Resume.jsx
import styles from './Resume.module.scss'
import Title from '../../components/Title/Title'
import Button from '../../components/Button/Button'

const Resume = () => {
    return (
    <section className={styles.main_resume}>
        <Title label="Resume & Career" className={styles.heading} />

        <div className={styles.page_main_title}>
            <p className={styles.tit_strong}>이력서와 경력기술서를 다운로드할 수 있습니다.</p>
        </div>

        <div className={styles.btn_group}>
            <Button
                label="이력 및 경력기술서 (pdf) download"
                icon="download"
                as="a"
                href="/assets/pdf/career-description_2026Jiyounglee.pdf"
                download="career-description_2026Jiyounglee.pdf"
            />
        </div>
    </section>
    )
}
export default Resume
