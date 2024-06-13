import Link from "next/link";
import { getAvailableNewsYears } from "@/lib/news-utils";

const ArchivePage = () => {
  const years = getAvailableNewsYears();

  return (
    <>
      <h1>News Archive</h1>
      <nav id="archive-header">
        <ul>
          {years.map((year) => (
            <li key={year}>
              <Link href={`/archive/${year}`}>{year}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default ArchivePage;
