import { NewsList } from "@/app/(news-list)";

import { getNewsForYear, getNewsForYearAndMonth } from "@/lib/news-utils";

const FilteredNews = async ({ year, month }) => {
  let news;

  if (year && !month) {
    news = await getNewsForYear(year);
  }

  if (month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  return (
    <>
      {!news && <p>Content not Found!</p>}
      {news && <NewsList news={news} />}
    </>
  );
};

export { FilteredNews };
