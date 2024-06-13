import Link from "next/link";

import { NewsList } from "@/app/(news-list)";
import {
  getNewsForYear,
  getAvailableNewsYears,
  getAvailableNewsMonths,
  getNewsForYearAndMonth,
} from "@/lib/news-utils";

const YEAR_SELECTOR = 0;
const MONTH_SELECTOR = 1;

const FilteredNewsPage = ({ params: { filter } }) => {
  console.log(filter);

  let news;
  let links = getAvailableNewsYears();
  const selectedYear = filter?.[YEAR_SELECTOR];
  const selectedMonth = filter?.[MONTH_SELECTOR];

  if (selectedYear) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  if (selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = undefined;
  }

  const content = news?.length > 0;

  return (
    <>
      <header id="archive-header">
        <h1>News Archive</h1>
        <nav>
          <ul>
            {links?.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;
              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {content && <NewsList news={news} />}
      {!content && <p>Content not Found!</p>}
    </>
  );
  // const news = getNewsForYear(year);

  // return <NewsList news={news} />;
};

export default FilteredNewsPage;
