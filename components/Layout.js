import Link from 'next/link';

export default function Layout({ children, title }) {
  return (
    <div>
      <header>
        <h1>{title || 'My Next.js Blog'}</h1>

        <nav>
          <Link href="/">Home</Link>
          {' | '}
          <Link href="/about">About</Link>
          {' | '}
          <Link href="/blog-posts">Blog</Link>
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        <p>Copyright © 2026 My Blog</p>
      </footer>
    </div>
  );
}