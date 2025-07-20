import Link from "next/link";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

import styles from "./Header.module.css";

export default function Header({ lang, navigation }) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href={`/${lang}`}>{navigation.home}</Link>
        <Link href={`/${lang}/about`}>{navigation.about}</Link>
      </nav>
      <LanguageSwitcher lang={lang} />
    </header>
  );
}
