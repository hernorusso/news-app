import Link from "next/link";

const NewsList = ({ news }) => (
  <ul className="news-list">
    {news.map((item) => {
      const { id, slug, image, title } = item;
      return (
        <li key={id}>
          <Link href={`/news/${slug}`}>
            <img src={`/images/news/${image}`} />
            <p>{title}</p>
          </Link>
        </li>
      );
    })}
  </ul>
);

export { NewsList };
