import useSWR from "swr";
import ArtPieces from "../components/ArtPieces";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function HomePage() {
  const { data } = useSWR("https://example-apis.vercel.app/api/art", fetcher);
  console.log(data);

  return (
    <div>
      <h1>Art Gallery</h1>
      <ArtPieces pieces={data} />
    </div>
  );
}
