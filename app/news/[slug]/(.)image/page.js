import { DUMMY_NEWS } from "@/dummy-news";

const InterceptedNewsImagePage = ({ params: { slug } }) => {
  const news = DUMMY_NEWS.find((news) => news.slug === slug);
  if (!news) notFound();

  const { title, image } = news;

  return (
    <>
      <div className="modal-backdrop" />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${image}`} alf={title} />
        </div>
      </dialog>
    </>
  );
};

export default InterceptedNewsImagePage;
