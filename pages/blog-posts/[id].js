import { getAllPostIds, getPostData } from '../../lib/posts';
import styles from '../../styles/Blog.module.css';
import Layout from '../../components/Layout';

export default function Post({ postData }) {
  return (
  <Layout title={postData.title}>
    <div className={styles.container}>
      <h1 className={styles.title}>{postData.title}</h1>

      <p className={styles.date}>{postData.date}</p>

      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </div>
  </Layout>
);
}

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}