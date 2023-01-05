import { render, screen } from "@testing-library/react";
import ArtPiecesDetails from "./index.js";

test("displays image, title, artist,year, and genre of art piece", () => {
  render(
    <ArtPiecesDetails
      artist="Min An"
      title="Silhouette Photo of Trees"
      image="https://example-apis.vercel.app/assets/art/silhouette-trees.jpg"
      year="2017"
      genre="Nature"
    />
  );
  const image = screen.getByAltText("Min An: Silhouette Photo of Trees");
  const artist = screen.getByText("Min An");
  const title = screen.getByRole("heading", {
    level: 2,
    name: "Silhouette Photo of Trees",
  });
  const year = screen.getByText("2017");
  const genre = screen.getByText("Nature");

  expect(image).toHaveAttribute(
    "src",
    expect.stringContaining("silhouette-trees.jpg")
  );
  expect(title).toBeInTheDocument();
  expect(artist).toBeInTheDocument();
  expect(year).toBeInTheDocument();
  expect(genre).toBeInTheDocument();
});

test("displays back link", () => {
  render(
    <ArtPiecesDetails
      artist="Min An"
      title="Silhouette Photo of Trees"
      image="https://example-apis.vercel.app/assets/art/silhouette-trees.jpg"
      year="2017"
      genre="Nature"
    />
  );

  const backLink = screen.getByRole("link", { name: "Back" });

  expect(backLink).toBeInTheDocument();
});
