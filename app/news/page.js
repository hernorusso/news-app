import Link from "next/link";

const NewsPage = () => (
  <>
    <h1>News Page</h1>
    <main>
      <ul>
        <li>
          <Link href="news/article-1">
            <p>Article 1</p>
          </Link>
        </li>
        <li>
          <Link href="news/article-2">
            <p>Article 2</p>
          </Link>
        </li>
        <li>
          <Link href="news/article-3">
            <p>Article 3</p>
          </Link>
        </li>
      </ul>
    </main>
  </>
);

export default NewsPage;
