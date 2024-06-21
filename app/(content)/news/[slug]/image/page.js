import { getNewsItem } from "@/lib/news-utils";

const NewsImagePage = async ({ params: { slug } }) => {
  const news = await getNewsItem(slug);
  if (!news) notFound();

  const { title, image } = news;

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${image}`} alf={title} />
    </div>
  );
};

export default NewsImagePage;
