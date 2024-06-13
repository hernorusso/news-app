import Link from "next/link";

const MainHeader = () => (
  <>
    <header>
      <h2>Main Header</h2>
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
    </header>
  </>
);

export { MainHeader };
