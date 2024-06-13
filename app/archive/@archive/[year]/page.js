import { getNewsForYear } from "@/lib/news-utils";
import { NewsList } from "@/app/(news-list)";

const FilteredNewsPage = ({ params: { year } }) => {
  const news = getNewsForYear(year);

  return <NewsList news={news} />;
};

export default FilteredNewsPage;
