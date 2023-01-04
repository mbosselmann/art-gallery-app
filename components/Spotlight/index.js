import { StyledImage } from "../StyledImage.js";
import styled from "styled-components";

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 30rem;
`;

export default function Spotlight({ image, artist }) {
  return (
    <>
      <ImageContainer>
        <StyledImage src={image} fill alt={`spotlight: ${artist}`} />
      </ImageContainer>
      <h2>{artist}</h2>
    </>
  );
}
