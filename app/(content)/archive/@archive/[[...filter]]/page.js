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

const FilteredNewsPage = async ({ params: { filter } }) => {
  let news, links, availableMonths;
  const availableYears = await getAvailableNewsYears();
  const selectedYear = filter?.[YEAR_SELECTOR];
  const selectedMonth = filter?.[MONTH_SELECTOR];

  links = availableYears;

  if (selectedYear) {
    news = await getNewsForYear(selectedYear);
    availableMonths = getAvailableNewsMonths(selectedYear);
    links = availableMonths;
  }

  if (selectedMonth) {
    news = await getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = undefined;
  }

  if (
    (selectedYear && !availableYears.includes(selectedYear)) ||
    (selectedMonth && !availableMonths.includes(selectedMonth))
  ) {
    throw new Error("Invalid Year selected!");
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
};

export default FilteredNewsPage;
