import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";

const NewsArticlePage = ({ params: { slug } }) => {
  const news = DUMMY_NEWS.find((news) => news.slug === slug);
  if (!news) notFound();

  const { title, image, date, content } = news;

  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${image}`} alt={title} />
        <h1>{title}</h1>
        <time dateTime={date}>{date}</time>
      </header>
      <p>{content}</p>
    </article>
  );
};

export default NewsArticlePage;
