import { getDictionary } from "@/lib/dictionary";
import styles from "./About.module.css";

export default async function AboutPage({ params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <div className={styles.aboutContainer}>
      <h1>{dict.about.pageTitle}</h1>
      <p>{dict.about.description}</p>
    </div>
  );
}
