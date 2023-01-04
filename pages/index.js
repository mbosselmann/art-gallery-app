import useSWR from "swr";
import ArtPieces from "../components/ArtPieces";
import Spotlight from "../components/Spotlight/index.js";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function HomePage() {
  const { data } = useSWR("https://example-apis.vercel.app/api/art", fetcher);
  console.log(data);

  const spotlightPiece =
    data && data[Math.floor(Math.random() * (data.length - 1))];

  return (
    <main>
      <h1>Art Gallery</h1>
      {spotlightPiece && (
        <Spotlight
          image={spotlightPiece.imageSource}
          artist={spotlightPiece.artist}
        />
      )}
      <ArtPieces pieces={data} />
    </main>
  );
}
