export default function BlogPost({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
    ],
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const posts = [
    {
      id: '1',
      title: 'Learning Next.js',
      content: 'I am learning Next.js.',
    },
    {
      id: '2',
      title: 'Learning React',
      content: 'I am learning React.',
    },
    {
      id: '3',
      title: 'Learning JavaScript',
      content: 'I am learning JavaScript.',
    },
  ];

  const post = posts.find((item) => item.id === params.id);
  if (!post) {
  return {
    notFound: true,
  };
}

  return {
    props: {
      post,
    },
  };
}