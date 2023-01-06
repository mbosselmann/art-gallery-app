import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "../components/Layout.js";
import { useImmerLocalStorageState } from "../lib/hook/useImmerLocalStorageState.js";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function App({ Component, pageProps }) {
  const { data } = useSWR("https://example-apis.vercel.app/api/art", fetcher);
  const [artPiecesInfo, setArtPiecesInfo] = useImmerLocalStorageState(
    "art-pieces-info",
    { defaultValue: [] }
  );

  function handleToggleFavorite(slug) {
    const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);
    if (artPiece) {
      setArtPiecesInfo(artPiecesInfo.filter((piece) => piece.slug !== slug));
    } else {
      setArtPiecesInfo([...artPiecesInfo, { slug }]);
    }
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        pieces={data}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={handleToggleFavorite}
      />
    </Layout>
  );
}
