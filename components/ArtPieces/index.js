import ArtPiecePreview from "../ArtPiecePreview";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 20rem));

  li {
    width: 100%;
    height: 30rem;
  }
`;

export default function ArtPieces({ pieces }) {
  return (
    <List>
      {pieces?.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecePreview
            title={piece.name}
            image={piece.imageSource}
            artist={piece.artist}
            slug={piece.slug}
          />
        </li>
      ))}
    </List>
  );
}
