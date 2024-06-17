import { DUMMY_NEWS } from "@/dummy-news";

const InterceptedNewsImagePage = ({ params: { slug } }) => {
  const news = DUMMY_NEWS.find((news) => news.slug === slug);
  if (!news) notFound();

  const { title, image } = news;

  return (
    <>
      <h2>Intercepted Page</h2>
      <div className="fullscreen-image">
        <img src={`/images/news/${image}`} alf={title} />
      </div>
    </>
  );
};

export default InterceptedNewsImagePage;
