"use client";

import { NewsList } from "@/app/(news-list)";
import { useEffect, useState } from "react";

const NewsPage = () => {
  const [news, setNews] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const getNews = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:8080/news");
        if (!response.ok) {
          setIsLoading(false);
        }
        const news = await response.json();
        setIsLoading(false);
        setNews(news);
      } catch (e) {
        setHasError(true);
      }
    };

    getNews();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (hasError) {
    return <p>Error</p>;
  }

  if (!news) {
    return null;
  }
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
