import Link from "next/link";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.description}>This page could not be found.</p>
      <Link href="/" className={styles.homeLink}>
        Return to Home
      </Link>
    </div>
  );
}
