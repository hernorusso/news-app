import { notFound } from "next/navigation";
import Link from "next/link";

import { getNewsItem } from "@/lib/news-utils";

const NewsArticlePage = async ({ params: { slug } }) => {
  const newsItem = await getNewsItem(slug);

  if (!newsItem) notFound();

  const { title, image, date, content } = newsItem;

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${slug}/image`}>
          <img src={`/images/news/${image}`} alt={title} />
        </Link>
        <h1>{title}</h1>
        <time dateTime={date}>{date}</time>
      </header>
      <p>{content}</p>
    </article>
  );
};

export default NewsArticlePage;
