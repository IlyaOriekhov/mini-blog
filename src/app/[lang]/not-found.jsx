import Link from "next/link";
import { getDictionary } from "@/lib/dictionary";
import styles from "./NotFound.module.css";

export default async function NotFound({ params: { lang } }) {
  const dict = await getDictionary("en");

  return (
    <div className={styles.container}>
      <h2>{dict.notFound.title}</h2>
      <p>{dict.notFound.description}</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
