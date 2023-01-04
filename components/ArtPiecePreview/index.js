import { StyledImage } from "../StyledImage.js";
import styled from "styled-components";

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Figure = styled.figure`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
`;

const Caption = styled.figcaption`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: black;
  color: white;
  padding: 0.5rem 0.3rem;
`;

export default function ArtPiecePreview({ title, image, artist }) {
  return (
    <Figure>
      <ImageContainer>
        <StyledImage src={image} fill alt={`${artist}: ${title}`} />
      </ImageContainer>
      <Caption>{`${artist}: ${title}`}</Caption>
    </Figure>
  );
}
