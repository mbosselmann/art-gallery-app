import ArtPieces from "../../components/ArtPieces";

export default function FavoritesPage({
  pieces,
  artPiecesInfo,
  onArtPiecesInfo,
  onToggleFavorite,
}) {
  const favorites = pieces?.filter((piece) =>
    artPiecesInfo.some((artPiece) => artPiece.slug === piece.slug)
  );

  return (
    <ArtPieces
      pieces={favorites}
      onArtPiecesInfo={onArtPiecesInfo}
      artPiecesInfo={artPiecesInfo}
      onToggleFavorite={onToggleFavorite}
    />
  );
}
