import { NewsList } from "@/app/(news-list)";
import { getAllNews } from "@/lib/news-utils";

const NewsPage = async () => {
  const news = await getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <main>
        <NewsList news={news} />
      </main>
    </>
  );
};

export default NewsPage;
