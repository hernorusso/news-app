import Link from "next/link";

import {
  getAvailableNewsYears,
  getAvailableNewsMonths,
} from "@/lib/news-utils";

import { FilteredNews } from "./filteredNews";

const YEAR_SELECTOR = 0;
const MONTH_SELECTOR = 1;

const FilteredNewsPage = async ({ params: { filter } }) => {
  let links, availableMonths;
  const availableYears = await getAvailableNewsYears();
  const selectedYear = filter?.[YEAR_SELECTOR];
  const selectedMonth = filter?.[MONTH_SELECTOR];

  links = availableYears;

  if (selectedYear) {
    availableMonths = getAvailableNewsMonths(selectedYear);
    links = availableMonths;
  }

  if (selectedMonth) {
    links = undefined;
  }

  if (
    (selectedYear && !availableYears.includes(selectedYear)) ||
    (selectedMonth && !availableMonths.includes(selectedMonth))
  ) {
    throw new Error("Invalid Year selected!");
  }

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
      <FilteredNews year={selectedYear} month={selectedMonth} />
    </>
  );
};

export default FilteredNewsPage;
