import { StyledImage } from "../StyledImage.js";
import styled from "styled-components";
import Link from "next/link.js";

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
}) {
  return (
    <>
      <ImageContainer>
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
