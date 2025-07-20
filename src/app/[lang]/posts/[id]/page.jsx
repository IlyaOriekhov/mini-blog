import { notFound } from "next/navigation";

import styles from "./Post.module.css";

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return posts.slice(0, 10).map((post) => ({
    id: post.id.toString(),
  }));
}

export async function generateMetadata({ params: { id } }) {
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  ).then((res) => res.json());

  return {
    title: post.title,
  };
}

//один пост
async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    notFound();
  }
  return res.json();
}

export default async function PostPage({ params }) {
  const post = await getPost(params.id);

  return (
    <div className={styles.postContainer}>
      <h1 className={styles.postTitle}>{post.title}</h1>
      <p className={styles.postBody}>{post.body}</p>
    </div>
  );
}
