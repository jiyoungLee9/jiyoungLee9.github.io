import styles from './Home.module.scss'

const Home = () => {
    return (
        <section className={styles.main_home}>
            <h2 className="hdn">Home</h2>
            <h3 className={styles.heading_msg}>
                <span>Deep Dive.</span>
            </h3>
            <p className={styles.heading_sub_msg}>Clear Context. Complete UI.</p>
            <p className={styles.heading_info_text}>Building modern UI with React, grounded in real-world publishing experience.</p>
            <h4 className={styles.hero_point}>깊이 파고들어 맥락을 이해하고, 끝까지 완성하는 프론트엔드 퍼블리셔</h4>
        </section>
    )
}
export default Home
