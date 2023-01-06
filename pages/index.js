import Spotlight from "../components/Spotlight/index.js";

export default function SpotlightPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const spotlightPiece =
    pieces && pieces[Math.floor(Math.random() * (pieces.length - 1))];

  return (
    <main>
      <h1>Art Gallery</h1>
      {spotlightPiece && (
        <Spotlight
          image={spotlightPiece.imageSource}
          artist={spotlightPiece.artist}
          isFavorite={artPiecesInfo.some(
            (piece) => piece.slug === spotlightPiece.slug
          )}
          onToggleFavorite={() => onToggleFavorite(spotlightPiece.slug)}
        />
      )}
    </main>
  );
}
