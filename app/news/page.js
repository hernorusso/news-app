import Link from "next/link";

import { DUMMY_NEWS } from "@/dummy-news";

const NewsPage = () => {
  return (
    <>
      <h1>News Page</h1>
      <main>
        <ul className="news-list">
          {DUMMY_NEWS.map((news) => (
            <li key={news.id}>
              <Link href={`news/${news.slug}`}>
                <img src={`images/news/${news.image}`} />
                <p>{news.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default NewsPage;
