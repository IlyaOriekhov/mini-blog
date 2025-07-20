import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>© {currentYear} Mini-Blog Project. Created by NutS.</p>
    </footer>
  );
}
