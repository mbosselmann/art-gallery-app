import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

const List = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  height: 100%;
  margin: 0;
  align-items: center;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  padding: 0 0.3rem;
  color: ${({ active }) => (active ? "lightcoral" : "black")};
  font-weight: bold;
  &:hover {
    border-bottom: 5px dotted lightcoral;
  }
`;

export default function Navigation() {
  const router = useRouter();

  return (
    <nav>
      <List role="list">
        <li>
          <NavLink href="/" active={router.pathname === "/"}>
            Spotlight
          </NavLink>
        </li>
        <li>
          <NavLink
            href="/art-pieces"
            active={router.pathname === "/art-pieces"}
          >
            Art Pieces
          </NavLink>
        </li>
        <li>
          <NavLink href="/favorites" active={router.pathname === "/favorites"}>
            Favorites
          </NavLink>
        </li>
      </List>
    </nav>
  );
}
