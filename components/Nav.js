import Link from "next/link";
import styled from "styled-components";
import { title } from "../pages/_document";

const Container = styled.nav`
  background: #ddd;
`;

const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: var(--max-width);
  padding: 0 var(--padding);
`;

const Credits = styled.a`
  margin: 0.5rem 0;
`;

const H1 = styled.h1`
  font-size: 1rem;
  margin: 0.5rem 0;
`;

const Nav = () => (
  <Container>
    <Content>
      <Link as={`/`} href={`/`}>
        <H1>
          <a href="/">{title}</a>
        </H1>
      </Link>
      <Link as={`/factaid`} href={`/factaid`}>
        <H1>
          <a href="/factaid">Fact Aid</a>
        </H1>
      </Link>
      <Link as={`/contribute`} href={`/contribute`}>
        <H1>
          <a href="/contribute">Mitmachen</a>
        </H1>
      </Link>
      <Link as={`/about`} href={`/about`}>
        <H1>
          <a href="/about">Über uns</a>
        </H1>
      </Link>
      <Link as={`/impressum`} href={`/impressum`}>
        <H1>
          <a href="/impressum">Impressum</a>
        </H1>
      </Link>
      <Credits
        href="https://github.com/flattenandflausch/frontend"
        rel="noopener noreferrer"
        target="_blank"
      >
        Repo
      </Credits>
    </Content>
  </Container>
);

export default Nav;
