import styled from "styled-components";
import FavoriteButton from "../FavoriteButton";
import Image from "next/image.js";
import { useRouter } from "next/router";
import { List } from "../List.js";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12rem;
`;

const Color = styled.li`
  width: 2rem;
  height: 2rem;
  background-color: ${(props) => props.color};
  border-radius: 50%;
`;

const StyledImage = styled(Image)`
  object-fit: scale-down;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 20rem;
`;

const BackButton = styled.button`
  background-color: white;
  text-decoration: none;
  border: 3px solid black;
  color: black;
  font-size: 2rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  width: 50px;
  height: 50px;
  padding: 0 0 0 0.1rem;
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
  const router = useRouter();

  return (
    <Wrapper>
      <ActionContainer>
        <BackButton
          type="button"
          onClick={() => router.back()}
          aria-label="back"
        >
          ←
        </BackButton>
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
      </ActionContainer>
      <h2>{title}</h2>
      <ImageContainer>
        <StyledImage src={image} fill alt={`${artist}: ${title}`} />
      </ImageContainer>
      <List role="list">
        {colors.map((color, index) => (
          <Color key={index} color={color} aria-label={color} />
        ))}
      </List>
      <List>
        <li>{artist}</li>
        <li>{year}</li>
        <li>{genre}</li>
      </List>
    </Wrapper>
  );
}
