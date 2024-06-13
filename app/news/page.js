import Link from "next/link";

const NewsPage = () => (
  <>
    <h1>News Page</h1>
    <main>
      <ul>
        <Link href="news/article-1">
          <li>Article 1</li>
        </Link>
        <Link href="news/article-2">
          <li>Article 2</li>
        </Link>
        <Link href="news/article-3">
          <li>Article 3</li>
        </Link>
      </ul>
    </main>
  </>
);

export default NewsPage;
