import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Homepage from "../page";

describe("Homepage", () => {
  it("renders a homepageContainer", () => {
    render(<Homepage />);

    const homepageContainer = screen.getByTestId("homepage_container");

    expect(homepageContainer).toBeInTheDocument();
  });
  it("renders a logo", () => {
    render(<Homepage />);

    const homeLogo = screen.getByTestId("home_logo");

    expect(homeLogo).toBeInTheDocument();
  });

  it("renders a link", () => {
    render(<Homepage />);
    const linkButtonDecode = screen.getByTestId("link_button_decode");
    expect(linkButtonDecode).toBeInTheDocument();
  });
  it("renders a link", () => {
    render(<Homepage />);
    const linkButtonProducts = screen.getByTestId("link_button_products");
    expect(linkButtonProducts).toBeInTheDocument();
  });
  it("renders a link", () => {
    render(<Homepage />);
    const linkButtonContact = screen.getByTestId("link_button_contact");
    expect(linkButtonContact).toBeInTheDocument();
  });
});
