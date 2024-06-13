import Link from "next/link";

import { NewsList } from "@/app/(news-list)";
import { getNewsForYear, getAvailableNewsYears } from "@/lib/news-utils";

const FilteredNewsPage = ({ params: { filter } }) => {
  console.log(filter);

  const years = getAvailableNewsYears();
  return (
    <>
      <header id="archive-header">
        <h1>News Archive</h1>
        <nav>
          <ul>
            {years.map((year) => (
              <li key={year}>
                <Link href={`/archive/${year}`}>{year}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <NewsList news={[]} />
    </>
  );
  // const news = getNewsForYear(year);

  // return <NewsList news={news} />;
};

export default FilteredNewsPage;
