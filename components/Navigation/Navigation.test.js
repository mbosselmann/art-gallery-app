import { render, screen } from "@testing-library/react";
import Navigation from "./index.js";

test("renders two links, one labeled 'Spotlight' and the other 'Pieces'", () => {
  render(<Navigation />);

  const spotlightLink = screen.getByRole("link", { name: "Spotlight" });
  const artPiecesLink = screen.getByRole("link", { name: "Art Pieces" });

  expect(spotlightLink).toBeInTheDocument();
  expect(artPiecesLink).toBeInTheDocument();
});
