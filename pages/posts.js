export default function Posts({ posts }) {
  return (
    <div>
      <h1>My Blog Posts ({posts.length})</h1>

      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const posts = [
    {
      id: 1,
      title: 'Learning Next.js',
      content: 'I am learning Next.js.',
    },
    {
      id: 2,
      title: 'Learning React',
      content: 'I am learning React.',
    },
    {
      id: 3,
      title: 'Learning JavaScript',
      content: 'I am learning JavaScript.',
    },
    {
  id: 4,
  title: 'Learning Python',
  content: 'I am learning Python.',
},
  ];

  return {
    props: {
      posts,
    },
  };
}
