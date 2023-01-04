import { render, screen } from "@testing-library/react";
import ArtPiecePreview from "./index.js";

test("renders image, title and artist for the piece", () => {
  render(
    <ArtPiecePreview
      artist="Steve Johnson"
      image="https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg"
      title="Orange Red and Green Abstract Painting"
    />
  );
  const image = screen.getByAltText(
    "Steve Johnson: Orange Red and Green Abstract Painting"
  );
  const artist = screen.getByText(/Steve Johnson/);
  const title = screen.getByText(/Orange Red and Green Abstract Painting/);

  expect(image).toHaveAttribute(
    "src",
    expect.stringContaining("orange-red-and-green.jpg")
  );
  expect(artist).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});
