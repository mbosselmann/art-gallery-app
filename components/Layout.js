import Navigation from "./Navigation/index.js";
import styled from "styled-components";
import { useEffect } from "react";
import { useRouter } from "next/router.js";

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 5rem auto 4rem;
`;

const Main = styled.main`
  overflow-y: scroll;
`;

const Headline = styled.h1`
  text-align: center;
`;

export default function Layout({ children }) {
  return (
    <Wrapper>
      <Headline>Art Gallery</Headline>
      <Main>{children}</Main>
      <Navigation />
    </Wrapper>
  );
}
