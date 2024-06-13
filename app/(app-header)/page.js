import Link from "next/link";

const AppHeader = () => (
  <>
    <h2>App Header</h2>
    <nav>
      <ul>
        <li>
          <Link href="/">
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link href="/news">
            <p>News</p>
          </Link>
        </li>
      </ul>
    </nav>
  </>
);

export { AppHeader };
