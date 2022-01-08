import { render, screen } from "@testing-library/react";
import { Header } from "..";
import { BrowserRouter } from "react-router-dom";

describe("#Header", () => {
  describe("when the header is rendered", () => {
    it("should contain a 'Pokelogo'", () => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );
      const linkElement = screen.getByRole("img");
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute("src", "pokelogo.svg");
      expect(linkElement).toHaveAttribute("alt", "pokelogo");
    });
  });
});
