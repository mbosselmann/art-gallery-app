import { StyledImage } from "../StyledImage.js";
import styled from "styled-components";
import FavoriteButton from "../FavoriteButton/index.js";

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 30rem;
`;

export default function Spotlight({
  image,
  artist,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <>
      <ImageContainer>
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
          positionAbsolute={true}
        />
        <StyledImage src={image} fill alt={`spotlight: ${artist}`} />
      </ImageContainer>
      <h2>{artist}</h2>
    </>
  );
}
