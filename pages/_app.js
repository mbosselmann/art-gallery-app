import GlobalStyle from "../styles";
import useSWR from "swr";
import Navigation from "../components/Navigation/index.js";
import Layout from "../components/Layout.js";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function App({ Component, pageProps }) {
  const { data } = useSWR("https://example-apis.vercel.app/api/art", fetcher);
  console.log(data);

  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} pieces={data} />
    </Layout>
  );
}
