import { NewsList } from "@/app/(news-list)";

const NewsPage = async () => {
  const response = await fetch("http://localhost:8080/news");
  if (!response.ok) {
    throw new Error("Failed when fetching data!");
  }
  const news = await response.json();

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
