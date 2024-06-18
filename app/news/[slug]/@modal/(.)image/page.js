"use client";
import { DUMMY_NEWS } from "@/dummy-news";
import { useRouter } from "next/navigation";

const InterceptedNewsImagePage = ({ params: { slug } }) => {
  const news = DUMMY_NEWS.find((news) => news.slug === slug);
  const router = useRouter();

  if (!news) notFound();
  const { title, image } = news;

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${image}`} alf={title} />
        </div>
      </dialog>
    </>
  );
};

export default InterceptedNewsImagePage;
