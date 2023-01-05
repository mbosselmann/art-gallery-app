import Link from "next/link.js";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/art-pieces">Art Pieces</Link>
        </li>
        <li>
          <Link href="/">Spotlight</Link>
        </li>
      </ul>
    </nav>
  );
}
