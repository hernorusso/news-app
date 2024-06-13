import { getLatestNews } from "@/lib/news-utils";
import { NewsList } from "@/app/(news-list)";

const LatestPage = () => {
  const news = getLatestNews();
  return (
    <>
      <h1>Latest News</h1>
      <NewsList news={news} />
    </>
  );
};

export default LatestPage;
