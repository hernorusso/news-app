import Link from "next/link";

import {
  getAvailableNewsYears,
  getAvailableNewsMonths,
} from "@/lib/news-utils";

const FilteredHeader = async ({ year, month }) => {
  let links, availableMonths;
  const availableYears = await getAvailableNewsYears();
  links = availableYears;

  if (year && availableYears.includes(year)) {
    availableMonths = getAvailableNewsMonths(year);
    links = availableMonths;
  }

  if (month) {
    links = undefined;
  }
  if (
    (year && !availableYears.includes(year)) ||
    (month && !availableMonths.includes(month))
  ) {
    throw new Error("Invalid Year selected!");
  }

  return (
    <header id="archive-header">
      <h1>News Archive</h1>
      <nav>
        <ul>
          {links?.map((link) => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;
            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export { FilteredHeader };
