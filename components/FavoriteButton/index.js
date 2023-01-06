import Image from "next/image.js";
import styled from "styled-components";

const Button = styled.button`
  position: absolute;
  right: 3rem;
  top: 3rem;
  z-index: 5;
  background-color: ${(props) => (props.isFavorite ? "gold" : "white")};
  border: none;
  border-radius: 500%;
  display: grid;
  place-items: center;
  width: 80px;
  height: 80px;
`;

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <Button
      type="button"
      onClick={onToggleFavorite}
      isFavorite={isFavorite}
      aria-label={isFavorite ? "unlike" : "like"}
    >
      <Image src="/assets/heart.svg" width={40} height={40} alt="" />
    </Button>
  );
}
