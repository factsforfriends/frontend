import App from "next/app";
import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";
import Nav from "../components/Nav";
import { title } from "./_document";

// Any global CSS variables and selectors we want
const GlobalStyle = createGlobalStyle`
  :root {
    --padding: 2rem;
    --max-width: 50rem;
  }

  body {
    font-family: 'PT Sans', sans-serif;
    margin: 0;
  }
`;

const Main = styled.main`
  margin: 0 auto;
  max-width: var(--max-width);
  padding: var(--padding);
  display: flex;
  flex-direction: column;
`;

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <>
        <Head>
          <title>{title}</title>
        </Head>
        <>
          <Nav />

          <Main>
            <div className="flex justify-start">
              <img
                style={{ width: "20%", marginBottom: "2em" }}
                src="/static/graphics/logo.png"
              />
              <img
                style={{ width: "35%", marginBottom: "2em", height: "auto" }}
                src="/static/graphics/logo_hackathon.png"
              />
            </div>
            <Component {...pageProps} router={router} />
          </Main>
          <GlobalStyle />
        </>
      </>
    );
  }
}
