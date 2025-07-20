"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import styles from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher({ lang }) {
  const pathname = usePathname();

  const getRedirectedPathname = (locale) => {
    if (!pathname) return "/";

    const segments = pathname.split("/");
    segments[1] = locale;

    return segments.join("/");
  };

  return (
    <div className={styles.switcher}>
      <Link
        href={getRedirectedPathname("en")}
        className={lang === "en" ? styles.active : ""}
      >
        EN
      </Link>
      <span>|</span>
      <Link
        href={getRedirectedPathname("uk")}
        className={lang === "uk" ? styles.active : ""}
      >
        UK
      </Link>
    </div>
  );
}
