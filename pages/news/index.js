import Link from "next/link";
import { Fragment } from "react";

// ourdomain.com/news
function NewsPage() {
  return (
    <Fragment>
      <h1>NewsPage</h1>
      <ul>
        <li>
          <Link href="/news/next-tutorial">NextJS Tutorial</Link>
        </li>
        <li>
          <Link href="/news/node-tutorial">NodeJS Tutorial</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
