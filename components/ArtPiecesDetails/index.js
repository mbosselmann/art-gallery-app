import { StyledImage } from "../StyledImage.js";
import styled from "styled-components";
import Link from "next/link.js";
import FavoriteButton from "../FavoriteButton";

const ImageContainer = styled.div`
  position: relative;
  height: 30rem;
`;

export default function ArtPiecesDetails({
  image,
  title,
  artist,
  year,
  genre,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <>
      <ImageContainer>
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
        <StyledImage src={image} fill alt={`${artist}: ${title}`} />
      </ImageContainer>
      <Link href="/art-pieces">Back</Link>
      <h2>{title}</h2>
      <ul>
        <li>{artist}</li>
        <li>{year}</li>
        <li>{genre}</li>
      </ul>
    </>
  );
}
