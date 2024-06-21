import { getNewsItem } from "@/lib/news-utils";
import { ModalBackdrop } from "./modal-backdrop";

const InterceptedNewsImagePage = async ({ params: { slug } }) => {
  const newsItem = await getNewsItem(slug);

  if (!newsItem) notFound();
  const { title, image } = newsItem;

  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${image}`} alf={title} />
        </div>
      </dialog>
    </>
  );
};

export default InterceptedNewsImagePage;
