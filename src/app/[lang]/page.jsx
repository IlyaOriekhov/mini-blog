import Link from "next/link";
import { getDictionary } from "@/lib/dictionary";
import styles from "./Home.module.css";

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
}

export default async function HomePage({ params: { lang } }) {
  const dict = await getDictionary(lang);
  const posts = await getPosts();

  return (
    <div>
      <h1 className={styles.title}>{dict.home.pageTitle}</h1>
      <ul className={styles.postList}>
        {posts.map((post) => (
          <li key={post.id} className={styles.postItem}>
            <h2 className={styles.postTitle}>{post.title}</h2>
            <Link
              href={`/${lang}/posts/${post.id}`}
              className={styles.viewButton}
            >
              {dict.post.viewButton}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
