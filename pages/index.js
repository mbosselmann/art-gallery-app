import ArtPieces from "../components/ArtPieces";
import Spotlight from "../components/Spotlight/index.js";

export default function SpotlightPage({ pieces }) {
  const spotlightPiece =
    pieces && pieces[Math.floor(Math.random() * (pieces.length - 1))];

  return (
    <main>
      <h1>Art Gallery</h1>
      {spotlightPiece && (
        <Spotlight
          image={spotlightPiece.imageSource}
          artist={spotlightPiece.artist}
        />
      )}
    </main>
  );
}
