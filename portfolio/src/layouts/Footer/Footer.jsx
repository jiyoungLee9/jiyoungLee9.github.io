import styles from './Footer.module.scss'

const Footer = () => {

  const email = "jadelee.project@gmail.com";

  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>© 2026 Jiyoung Lee. All rights reserved.</p>
      <a 
          href={`mailto:${email}`} 
          className={styles.footer_link}
          aria-label="이메일 보내기 (새 창 열림)"
          title="이메일 보내기 (새 창 열림)"
        >
          {email}
        </a>      
    </footer>
  )
}

export default Footer