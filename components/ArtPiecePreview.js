import Image from "next/image.js";
import styled from "styled-components";

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80%;
`;

const Figure = styled.figure`
  width: 300px;
  height: 400px;
`;

const Caption = styled.figcaption`
  background-color: black;
  color: white;
  padding: 0.5rem 0.3rem;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;

export default function ArtPiecePreview({ title, image, artist }) {
  return (
    <li>
      <Figure>
        <ImageContainer>
          <StyledImage src={image} fill alt="" />
        </ImageContainer>
        <Caption>{`${artist}: ${title}`}</Caption>
      </Figure>
    </li>
  );
}
