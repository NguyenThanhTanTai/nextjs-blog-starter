import { getSortedPostsData } from '../lib/posts';
import styles from '../styles/Blog.module.css';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function BlogPosts({ allPostsData }) {
  return (
  <Layout title="My Markdown Blog">
    <div className={styles.container}>
      <h1 className={styles.title}>My Markdown Blog</h1>

      {allPostsData.map(({ id, date, title }) => (
        <div className={styles.post} key={id}>
          <h2 className={styles.postTitle}>
            <Link href={`/blog-posts/${id}`}>
              {title}
            </Link>
          </h2>

          <p className={styles.date}>{date}</p>
        </div>
      ))}
    </div>
  </Layout>
);
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}