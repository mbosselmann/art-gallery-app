import { useRouter } from "next/router";
import ArtPiecesDetails from "../../components/ArtPiecesDetails/index.js";

export default function ArtPieceDetailsPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
  addComment,
}) {
  const router = useRouter();
  const { slug } = router.query;

  const selectedArtPiece = pieces?.find((piece) => piece.slug === slug);
  const selectedArtPieceComments = artPiecesInfo?.find(
    (piece) => piece.slug === selectedArtPiece?.slug
  )?.comments;
  if (!selectedArtPiece) {
    return null;
  }
  return (
    <ArtPiecesDetails
      image={selectedArtPiece.imageSource}
      title={selectedArtPiece.name}
      artist={selectedArtPiece.artist}
      year={selectedArtPiece.year}
      genre={selectedArtPiece.genre}
      isFavorite={
        artPiecesInfo?.find((piece) => piece.slug === selectedArtPiece.slug)
          ?.isFavorite
      }
      onToggleFavorite={() => onToggleFavorite(selectedArtPiece.slug)}
      colors={selectedArtPiece.colors}
      comments={selectedArtPieceComments}
      addComment={(newComment) => addComment(newComment, selectedArtPiece.slug)}
    />
  );
}
