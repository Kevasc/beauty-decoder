import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Homepage from "../page";

describe("Homepage", () => {
  it("renders a homepageContainer", () => {
    render(<Homepage />);

    const homepageContainer = screen.getByTestId("homepage_container");

    expect(homepageContainer).toBeInTheDocument();
  });

  it("renders a top line of the heading", () => {
    render(<Homepage />);

    const headingTop = screen.getByTestId("heading_top_line");

    expect(headingTop).toHaveTextContent("BEAUTY");
  });

  it("renders a bottom line of the heading", () => {
    render(<Homepage />);

    const headingBottom = screen.getByTestId("heading_bottom_line");

    expect(headingBottom).toHaveTextContent("DECODER");
  });

  it("renders a description of the homepage", () => {
    render(<Homepage />);

    const homepageDescription = screen.getByTestId("homepage_description");

    expect(homepageDescription).toHaveTextContent(
      "A simple cosmetics ingredients comparison website"
    );
  });

  it("renders an image", () => {
    render(<Homepage />);
    const mainImage = screen.getByTestId("main_image");
    expect(mainImage).toHaveAttribute(
      "src",
      "/_next/image?url=%2Fimg.jpg&w=96&q=75"
    );
  });
});
