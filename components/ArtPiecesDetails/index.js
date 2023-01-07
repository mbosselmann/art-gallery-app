import { StyledImage } from "../StyledImage.js";
import styled from "styled-components";
import Link from "next/link.js";
import FavoriteButton from "../FavoriteButton";

const ImageContainer = styled.div`
  position: relative;
  height: 30rem;
`;

const ColorList = styled.ul`
  list-style: none;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const Color = styled.li`
  width: 2rem;
  height: 2rem;
  background-color: ${(props) => props.color};
  border-radius: 50%;
`;

export default function ArtPiecesDetails({
  image,
  title,
  artist,
  year,
  genre,
  isFavorite,
  onToggleFavorite,
  colors,
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
      <ColorList role="list">
        {colors.map((color, index) => (
          <Color key={index} color={color} aria-label={color} />
        ))}
      </ColorList>
      <ul>
        <li>{artist}</li>
        <li>{year}</li>
        <li>{genre}</li>
      </ul>
    </>
  );
}
