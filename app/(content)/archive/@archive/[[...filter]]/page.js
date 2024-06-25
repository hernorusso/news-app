import { Suspense } from "react";

import { FilteredNews } from "./filteredNews";
import { FilteredHeader } from "./filteredHeader";

const YEAR_INDEX = 0;
const MONTH_INDEX = 1;

const FilteredNewsPage = async ({ params: { filter } }) => {
  const selectedYear = filter?.[YEAR_INDEX];
  const selectedMonth = filter?.[MONTH_INDEX];

  return (
    <>
      <Suspense fallback={<p>Loading header...</p>}>
        <FilteredHeader year={selectedYear} month={selectedMonth} />
      </Suspense>
      <Suspense fallback={<p>Loading news...</p>}>
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
};

export default FilteredNewsPage;
