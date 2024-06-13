import Link from "next/link";

import { DUMMY_NEWS } from "@/dummy-news";
import { NewsList } from "@/app/(news-list)";

const NewsPage = () => {
  return (
    <>
      <h1>News Page</h1>
      <main>
        <NewsList news={DUMMY_NEWS} />
      </main>
    </>
  );
};

export default NewsPage;
